import {Injectable} from '@angular/core';
import {TOKEN_STORAGE_KEY} from '../global/const';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {IAuthTokenInformation, ICredentianls} from '../interfaces/auth.interface';
import {tap} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';
import {AuthEndpoint} from '../endpoints/auth.endpoint';
import {UserService} from './user.service';
import {IPermissions} from '../interfaces/user.interface';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    authInformationSubject: Subject<IAuthTokenInformation> = new Subject<IAuthTokenInformation>();

    constructor(private userService: UserService,
                private http: HttpClient,
                private router: Router) {
    }

    static getToken(): string {
        if (localStorage.getItem(TOKEN_STORAGE_KEY)) {
            return JSON.parse(localStorage.getItem(TOKEN_STORAGE_KEY)).token;
        }
        return null;
    }

    static getPermissions(): IPermissions[] {
        const user: IAuthTokenInformation = JSON.parse(localStorage.getItem(TOKEN_STORAGE_KEY));
        if (user.profile && user.profile.permissions && user.profile.permissions.length > 0) {
            return user.profile.permissions;
        }
        return [];
    }

    static getAuthInformation(): IAuthTokenInformation {
        if (localStorage.getItem(TOKEN_STORAGE_KEY)) {
            return JSON.parse(localStorage.getItem(TOKEN_STORAGE_KEY));
        }
        return null;
    }

    authenticate(credentials: ICredentianls): Observable<IAuthTokenInformation> {
        return this.http.post<IAuthTokenInformation>(AuthEndpoint.login, credentials)
            .pipe(
                tap(auth => this.userService.setSelectedUser(auth))
            );
    }

    logout(redirect?: boolean): void {
        localStorage.removeItem(TOKEN_STORAGE_KEY);
        if (redirect) {
            this.setDropData();
            this.router.navigateByUrl('/auth');
        }
    }

    refreshAuthInfo(authInfo: IAuthTokenInformation): void {
        localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(authInfo));
        this.authInformationSubject.next(authInfo);
    }

    setDropData(): void {
        this.userService.setSelectedUser(null);
        localStorage.clear();
    }
}
