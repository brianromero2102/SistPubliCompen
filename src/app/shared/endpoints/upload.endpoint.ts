import {environment} from '../../../environments/environment';

export class UploadEndpoint {
    static uri_upload_delivery = environment.serviceURI + 'upload/delivery';
    static uri_upload_backoffice = environment.serviceURI + 'upload/backoffice';
    static uri_upload_typereccessed = environment.serviceURI + 'upload/type-reccessed';
    static uri_upload_stock = environment.serviceURI + 'upload/inv-stock';
    static uri_upload_employee = environment.serviceURI + 'upload/tdp-employee';
    static uri_upload_order = environment.serviceURI + 'upload/tdp-order-fligth';
    static uri_upload_catalogue = environment.serviceURI + 'upload/tdp-catalogue';
    static uri_upload_technology = environment.serviceURI + 'upload/tdp-technology';
}
