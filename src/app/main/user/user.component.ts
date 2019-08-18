import {Component, OnInit} from '@angular/core';
import {FuseSidebarService} from '../../../@fuse/components/sidebar/sidebar.service';
import {MatDialog} from '@angular/material';
import {ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from '../../../@fuse/animations';
import {Subject} from 'rxjs';
import {FuseNavigationService} from '../../../@fuse/components/navigation/navigation.service';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class UserComponent implements OnInit {

    item: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {FuseSidebarService} _fuseSidebarService
     * @param _fuseNavigationService
     */
    constructor(
        private _fuseSidebarService: FuseSidebarService,
        private _fuseNavigationService: FuseNavigationService,
    ) {

        // Set the private defaults
        this._unsubscribeAll = new Subject();

    }

    ngOnInit(): void {
        this._fuseNavigationService.onNavigationChanged.subscribe(change => {
            console.log(change);
        });

        this._fuseNavigationService.selectedItem.subscribe(item => {
            this.item = item ? item : JSON.parse(localStorage.getItem('selectedItem'));
        });
    }

    toggleSidebar(name): void {
        this._fuseSidebarService.getSidebar(name).toggleOpen();
    }

}
