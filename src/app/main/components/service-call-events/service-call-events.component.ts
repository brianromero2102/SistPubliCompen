import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {getLastDay, getToday} from '../../../shared/global/utils';
import {IRequestLog, IResponseEndpointCall, IResponseServiceCall} from '../../../shared/interfaces/log.interface';
import {LogService} from '../../../shared/services/log.service';
import {FuseProgressBarService} from '../../../../@fuse/components/progress-bar/progress-bar.service';

@Component({
    selector: 'app-service-call-events',
    templateUrl: './service-call-events.component.html',
    styleUrls: ['./service-call-events.component.scss']
})
export class ServiceCallEventsComponent implements OnInit {

    title = 'htttp://prueba.com';

    dataSource: MatTableDataSource<IResponseServiceCall>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    displayedColumns: string[] = ['nro', 'tag', 'servicecode', 'datetime_request', 'datetime_response'];

    detail: boolean;
    detailService: IResponseServiceCall;

    constructor(
        private _logService: LogService,
        private _fuseProgressBarService: FuseProgressBarService
    ) {

    }

    ngOnInit(): void {
        this.serviceCallEvent({startDate: getToday(), endDate: getLastDay()});
    }

    serviceCallEvent(data: IRequestLog): void {

        // Show the progress bar
        this._fuseProgressBarService.show();

        this._logService.getServiceCallEvent(data).subscribe(serviceCallEvent => {

            // Hide the progress bar
            this._fuseProgressBarService.hide();

            this.dataSource = new MatTableDataSource(serviceCallEvent);
            this.dataSource.paginator = this.paginator;

        });
    }

    eventRow(event: IResponseServiceCall): void {
        this.detail = true;
        this.detailService = event;
        this.detailService.serviceurl = JSON.parse(JSON.stringify(event.serviceurl));
        this.detailService.serviceresponse = JSON.parse(event.serviceresponse);
        this.detailService.servicerequest = JSON.parse(event.servicerequest);
    }

}
