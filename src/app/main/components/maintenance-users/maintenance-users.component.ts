import {Component, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../../../shared/services/user.service';
import {FuseProgressBarService} from '../../../../@fuse/components/progress-bar/progress-bar.service';
import {IUser} from '../../../shared/interfaces/user.interface';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
    selector: 'app-maintenance-users',
    templateUrl: './maintenance-users.component.html',
    styleUrls: ['./maintenance-users.component.scss']
})
export class MaintenanceUsersComponent implements OnInit {


    dataSource: MatTableDataSource<IUser>;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    displayedColumns: string[] = ['nro', 'name', 'lastname', 'username', 'email', 'doctype', 'docnumber'];

    constructor(
        private _fuseProgressBarService: FuseProgressBarService,
        private _userService: UserService,
    ) {
    }

    ngOnInit(): void {

        this.getUsersAll();

    }

    getUsersAll(): void {

        // Show Progress bar
        this._fuseProgressBarService.show();

        this._userService.getUsers().subscribe(users => {

            // Hide Progress bar
            this._fuseProgressBarService.hide();
            this.dataSource = new MatTableDataSource(users);
            this.dataSource.paginator = this.paginator;
        });
    }

}
