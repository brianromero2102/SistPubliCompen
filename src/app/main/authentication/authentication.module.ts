import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticationComponent} from './authentication.component';
import {LoginComponent} from './login/login.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {MailConfirmComponent} from './mail-confirm/mail-confirm.component';
import {FuseSharedModule} from '../../../@fuse/shared.module';
import {ForgotPasswordModule} from './forgot-password/forgot-password.module';
import {LoginModule} from './login/login.module';
import {ResetPasswordModule} from './reset-password/reset-password.module';
import {MailConfirmModule} from './mail-confirm/mail-confirm.module';
import {SharedModule} from '../../shared/shared.module';
import {RegisterComponent} from './register/register.component';
import {RegisterModule} from './register/register.module';

const routes: Routes = [
    {
        path: '',
        component: AuthenticationComponent,
        children: [
            {
                path: '',
                component: LoginComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'forgot-password',
                component: ForgotPasswordComponent
            },
            {
                path: 'forgot-password/:url',
                component: ForgotPasswordComponent
            },
            {
                path: 'reset-password',
                component: ResetPasswordComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            },
        ],
    },
    {
        path: 'mail-confirm',
        component: MailConfirmComponent
    },
];

@NgModule({
    imports: [
        FuseSharedModule,
        ForgotPasswordModule,
        LoginModule,
        ResetPasswordModule,
        MailConfirmModule,
        RegisterModule,
        RouterModule.forChild(routes),
    ],
    declarations: [AuthenticationComponent]
})
export class AuthenticationModule {
}
