import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IRequestLog, IResponseEndpointCall, IResponseServiceCall} from '../interfaces/log.interface';
import {LogEndpoint} from '../endpoints/log.endpoint';

@Injectable({
  providedIn: 'root'
})
export class LogService {

    constructor(private http: HttpClient) {
    }

    getServiceCallEvent(data: IRequestLog): Observable<IResponseServiceCall[]> {
        return this.http.post<IResponseServiceCall[]>(LogEndpoint.serviceCallEvent, data);
    }

    getEndPointCallEvent(data: IRequestLog): Observable<IResponseEndpointCall[]> {
        return this.http.post<IResponseEndpointCall[]>(LogEndpoint.endpointCallEvent, data);
    }
}
