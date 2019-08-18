import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {fuseAnimations} from '../../../../@fuse/animations';
import {IUser} from '../../../shared/interfaces/user.interface';
import {AuthService} from '../../../shared/services/auth.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class ProfileComponent implements OnInit {

    user: IUser;

    constructor() {
    }

    ngOnInit(): void {

        this.user = AuthService.getAuthInformation();

    }

}
