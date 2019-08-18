export interface IRequestLog {
    startDate: any;
    endDate: any;
}

export interface IResponseServiceCall {
    id: string;
    tag: string;
    servicecode: string;
    serviceurl: string;
    servicerequest: string;
    serviceresponse: string;
}

export interface IResponseEndpointCall {
    id: string;
    tag: string;
    uriendpoint: string;
    request: string;
    response: string;
}
