import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {IRequestLog, IResponseEndpointCall} from '../../../shared/interfaces/log.interface';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {LogService} from '../../../shared/services/log.service';
import {getLastDay, getToday} from '../../../shared/global/utils';
import {FuseProgressBarService} from '../../../../@fuse/components/progress-bar/progress-bar.service';
import {IUser} from '../../../shared/interfaces/user.interface';
import {fuseAnimations} from '../../../../@fuse/animations';

@Component({
    selector: 'app-endpoint-call-events',
    templateUrl: './endpoint-call-events.component.html',
    styleUrls: ['./endpoint-call-events.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class EndpointCallEventsComponent implements OnInit {

    // dataEndpointCallEvent: IResponseEndpointCall[];
    dataSource: MatTableDataSource<IResponseEndpointCall>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    displayedColumns: string[] = ['nro', 'tag', 'uriendpoint', 'datetime_request', 'datetime_response'];
    // displayedColumns: string[] = ['tag'];

    loading: boolean;


    constructor(
        private _logService: LogService,
        private _fuseProgressBarService: FuseProgressBarService
    ) {
    }

    ngOnInit(): void {
        this.endpointCallEvent({startDate: getToday(), endDate: getLastDay()});
    }

    endpointCallEvent(data: IRequestLog): void {

        // Show the progress bar
        this._fuseProgressBarService.show();

        this._logService.getEndPointCallEvent(data).subscribe(endpointCallEvent => {

            // Hide the progress bar
            this._fuseProgressBarService.hide();

            this.dataSource = new MatTableDataSource(endpointCallEvent);
            this.dataSource.paginator = this.paginator;

        });
    }

}
