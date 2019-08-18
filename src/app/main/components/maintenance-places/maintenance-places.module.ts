import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import {FuseSharedModule} from '../../../../@fuse/shared.module';
import {MaintenancePlacesComponent} from './maintenance-places.component';
import {FileUploadModule} from 'ng2-file-upload';

@NgModule({
  imports: [
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,

      FileUploadModule,

      FuseSharedModule,
  ],
  declarations: [
      MaintenancePlacesComponent
  ]
})
export class MaintenancePlacesModule { }
