import {Component, OnChanges, OnInit, SimpleChanges, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from '../../../@fuse/animations';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {FuseNavigationService} from '../../../@fuse/components/navigation/navigation.service';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styleUrls: ['./components.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class ComponentsComponent implements OnInit {

    item: any;

    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(
        private _fuseNavigationService: FuseNavigationService
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

}
