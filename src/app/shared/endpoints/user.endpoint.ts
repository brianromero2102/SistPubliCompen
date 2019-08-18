import {environment} from '../../../environments/environment';

export class UserEndpoint {
    static users = environment.serviceURI + 'users';
}
