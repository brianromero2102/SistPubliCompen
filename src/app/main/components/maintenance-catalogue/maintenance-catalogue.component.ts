import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IAuthTokenInformation} from '../../../shared/interfaces/auth.interface';
import {FileUploader} from 'ng2-file-upload';
import {UploadEndpoint} from '../../../shared/endpoints/upload.endpoint';
import {FuseProgressBarService} from '../../../../@fuse/components/progress-bar/progress-bar.service';
import {AuthService} from '../../../shared/services/auth.service';

@Component({
  selector: 'app-maintenance-catalogue',
  templateUrl: './maintenance-catalogue.component.html',
  styleUrls: ['./maintenance-catalogue.component.scss']
})
export class MaintenanceCatalogueComponent implements OnInit {

    formMaintenance: FormGroup;
    user: IAuthTokenInformation;

    uploader: FileUploader = new FileUploader({
        url: UploadEndpoint.uri_upload_catalogue,
        itemAlias: 'file',
        queueLimit: 10,
    });

    constructor(
        private _formBuilder: FormBuilder,
        private _fuseProgressBarService: FuseProgressBarService
    ) {
    }

    ngOnInit(): void {
        this.formMaintenance = this._formBuilder.group({
            name: [''],
            description: [''],
            file: ['', Validators.required],
        });

        this.user = AuthService.getAuthInformation();
    }

    submitData(): void {
        if (this.formMaintenance.valid) {

            // Show the progress bar
            this._fuseProgressBarService.show();

            this.uploader.onBeforeUploadItem = (fileItem => {
                this.uploader.authToken = AuthService.getToken();
                this.uploader.options.additionalParameter = {
                    name: this.formMaintenance.get('name').value,
                    description: this.formMaintenance.get('description').value,
                    file: fileItem.file.name,
                    username: this.user.username,
                };
            });

            this.uploader.uploadAll();

            this.uploader.onAfterAddingFile = (file) => {
                file.withCredentials = false;
            };

            this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {

                // Hide the progress bar
                this._fuseProgressBarService.hide();

                const res = JSON.parse(response);
                if (res.success) {
                    alert('archivo subido correctamente');
                    this.formMaintenance.reset();
                } else {
                    alert(res.msg);
                }
            };
        }
    }

}
