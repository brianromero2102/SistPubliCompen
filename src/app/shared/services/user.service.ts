import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {IAuthTokenInformation} from '../interfaces/auth.interface';
import {HttpClient} from '@angular/common/http';
import {TOKEN_STORAGE_KEY} from '../global/const';
import {IUser} from '../interfaces/user.interface';
import {UserEndpoint} from '../endpoints/user.endpoint';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    userSelected: BehaviorSubject<IAuthTokenInformation> = new BehaviorSubject<IAuthTokenInformation>(null);

    constructor(private http: HttpClient) {
    }

    setSelectedUser(user: IAuthTokenInformation): void {
        localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(user));
        this.userSelected.next(user);
    }

    getUsers(): Observable<IUser[]> {
        return this.http.post<IUser[]>(UserEndpoint.users, {});
    }
}
