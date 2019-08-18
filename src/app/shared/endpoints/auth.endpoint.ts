import {environment} from '../../../environments/environment';

export class AuthEndpoint {
    static login = environment.serviceURI + 'login';
}
