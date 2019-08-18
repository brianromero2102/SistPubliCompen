import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user.component';
import {
    MatIconModule,
} from '@angular/material';
import {FuseSharedModule} from '../../../@fuse/shared.module';
import {JwtInterceptor} from '../../shared/interceptors/jwt.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ProfileComponent} from './profile/profile.component';
import {ProfileModule} from './profile/profile.module';

const routes: Routes = [
    {
        path: '',
        component: UserComponent,
        children: [
            {
                path: 'profile',
                component: ProfileComponent,
            }
        ]
    },
];

@NgModule({
    imports: [
        MatIconModule,

        FuseSharedModule,

        ProfileModule,

        RouterModule.forChild(routes),
    ],
    declarations: [
        UserComponent,
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    ]
})
export class UserModule {
}
