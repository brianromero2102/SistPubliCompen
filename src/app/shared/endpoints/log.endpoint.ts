import {environment} from '../../../environments/environment';

export class LogEndpoint {
    static serviceCallEvent = environment.serviceURI + 'logs/service-call-events';
    static endpointCallEvent = environment.serviceURI + 'logs/endpoint-call-events';
}