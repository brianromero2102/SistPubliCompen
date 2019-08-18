import {Component, HostBinding, Input} from '@angular/core';

import {FuseNavigationItem} from '@fuse/types';
import {FuseNavigationService} from '../../navigation.service';

@Component({
    selector: 'fuse-nav-vertical-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class FuseNavVerticalItemComponent {
    @HostBinding('class')
    classes = 'nav-item';

    @Input()
    item: FuseNavigationItem;

    /**
     * Constructor
     */
    constructor(
        private _fuseNavigationService: FuseNavigationService
    ) {
    }

    onSelected(item: any): void {
        this._fuseNavigationService.selectedItem.next(item);
        localStorage.setItem('selectedItem', JSON.stringify(item));
    }
}
