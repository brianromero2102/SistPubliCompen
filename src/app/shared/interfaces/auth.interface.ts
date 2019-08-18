import {IUser} from './user.interface';

export interface ICredentianls {
    username: string;
    password: string;
}

export interface IAuthTokenInformation extends IUser {
    token: string;
}
