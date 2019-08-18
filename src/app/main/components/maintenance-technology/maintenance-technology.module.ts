import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaintenanceTechnologyComponent} from './maintenance-technology.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import {FileUploadModule} from 'ng2-file-upload';
import {FuseSharedModule} from '../../../../@fuse/shared.module';

@NgModule({
  imports: [
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,

      FileUploadModule,

      FuseSharedModule,
  ],
  declarations: [MaintenanceTechnologyComponent]
})
export class MaintenanceTechnologyModule { }
