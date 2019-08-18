import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {TableDataSource} from './table-datasource';
import {IRequestLog} from '../../interfaces/log.interface';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    // @ViewChild(MatPaginator) paginator: MatPaginator;

    private _paginator: MatPaginator;

    @ViewChild(MatPaginator) set paginator(content: MatPaginator) {
        this._paginator = content;
    }

    @ViewChild(MatSort) sort: MatSort;
    dataSource: TableDataSource;
    displayedColumns: string[];

    @Input() headersException: string[];
    @Input() loading: boolean;
    @Input() rangeDate: IRequestLog;

    @Output() eventResponse: EventEmitter<any> = new EventEmitter<any>();

    _data: any[];
    private get data(): any[] {
        return this._data;
    }

    @Input()
    private set data(data: any[]) {

        this._data = data;

        if (data && data.length > 0) {
            this.dataSource = new TableDataSource(this.paginator, this.sort, this.data);
            this.displayedColumns = this.getHeaders(data[0]);
        }

    }

    ngOnInit(): void {

    }

    getHeaders(data: any): string[] {

        let headers: any[];

        headers = [];

        Object.keys(data).forEach(key => {
            if (this.headersException && this.headersException.find(h => h === key)) {
                return false;
            }
            headers.push(key);
        });

        return headers;

    }

    eventSelected(row: any): void {
        this.eventResponse.emit(row);
    }
}
