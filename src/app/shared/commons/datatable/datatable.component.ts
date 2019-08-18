import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {IRequestLog} from '../../interfaces/log.interface';

@Component({
    selector: 'app-datatable',
    templateUrl: './datatable.component.html',
    styleUrls: ['./datatable.component.scss']
})
export class DatatableComponent implements OnInit {

    displayedColumns: string[];
    dataSource: MatTableDataSource<any>;

    properties: ['table-responsive'];



    @Output() eventResponse: EventEmitter<any> = new EventEmitter<any>();

    @Input() loading: boolean;
    @Input() rangeDate: IRequestLog;

    @Input() headersException: string[];
    @Input() title: string;

    _data: any[];
    private get data(): any[] {
        return this._data;
    }

    @Input()
    private set data(data: any[]) {

        this._data = data;

        if (data && data.length > 0) {
            this.displayedColumns = this.getHeaders(data[0]);
            this.dataSource = new MatTableDataSource(data);
            this.dataSource.paginator = this.paginator;
        }

    }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;



    constructor() {
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
