import {AfterViewInit, Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {FuseConfigService} from '@fuse/services/config.service';
import {fuseAnimations} from '@fuse/animations/index';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {AuthService} from '../../../shared/services/auth.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class LoginComponent implements AfterViewInit, OnInit {
    loginForm: FormGroup;
    authFail = false;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     * @param router
     * @param route
     * @param authService
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private router: Router,
        private route: ActivatedRoute,
        private authService: AuthService,
        // private snackBar: MatSnackBar
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
                    hidden: false
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

    ngAfterViewInit(): void {
        if (AuthService.getToken()) {
            this.router.navigate(['users/profile']);
        }
    }

    /**
     * On init
     */
    ngOnInit(): void {
        this.loginForm = this._formBuilder.group({
            username: ['', [Validators.required]],
            password: ['', Validators.required]
        });
        // if (JSON.parse(sessionStorage.getItem('change_password_state'))) {
        //     this.snackBar.open('Contraseña cambiada con exito!', 'Cerrar', {
        //         duration: 5000,
        //         horizontalPosition: 'left',
        //         verticalPosition: 'top',
        //         panelClass: ['success-snackbar']
        //     });
        // }
    }

    authenticate(): void {
        if (this.loginForm.valid) {
            const credentials = this.loginForm.getRawValue();
            this.authService.authenticate(credentials).subscribe(
                (auth) => {
                    this.authFail = false;
                    this.loginForm.disable();
                    setTimeout(() => this.router.navigate(['users/profile']));
                },
                (error1) => {
                    this.authFail = true;
                });
        }
    }
}
