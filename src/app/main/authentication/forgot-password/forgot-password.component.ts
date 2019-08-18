import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class ForgotPasswordComponent implements OnInit {
    forgotPasswordForm: FormGroup;
    paramForgotUrl: string;

    email: AbstractControl;

    onSendingRequest = false;
    formu: boolean = true;
    formu1: boolean;
    formu2: boolean;
    formu3: boolean;
    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     * @param route
     * @param router
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        // private userService: UserService
    ) {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.forgotPasswordForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
        });

        this.email = this.forgotPasswordForm.get('email');

        this.paramForgotUrl = this.route.snapshot.params['url'];
        // if (this.paramForgotUrl) {
        //     this.validUrlForgotRequest();
        // }
    }

    async validUrlForgotRequest(): Promise<void> {
        // try {
        //     const forgotRequest = await this.userService.forgotPasswordIsValid(this.paramForgotUrl).toPromise();
        //     if (forgotRequest) {
        //         sessionStorage.setItem('forgot_password_info', JSON.stringify(forgotRequest));
        //         this.router.navigate(['auth/reset-password']);
        //     }
        // } catch (e) {
        //     this.router.navigate(['auth/login']);
        // }
    }

    async sendRequestForForgotPassword(): Promise<void> {
        // this.onSendingRequest = true;
        // this.forgotPasswordForm.disable();
        // await this.userService.forgotPasswordRequest({email: this.email.value}).toPromise();
        // this.forgotPasswordForm.enable();
        // this.onSendingRequest = false;
        // sessionStorage.setItem('forgot_password_email', this.email.value);
        // this.router.navigate(['auth/mail-confirm']);
    }


    ocultar1(bandera: number): void {
        this.formu = false;
        this.formu1 = false;
        this.formu2 = false;
        this.formu3 = false;
        switch (bandera) {
            case 1:
                this.formu = true;
                break;
            case 2:
                this.formu1 = true;
                break;
            case 3:
                this.formu2 = true;
                break;
            case 4:
                this.formu3 = true;
        }
    }
}
