import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import {FileUploadModule} from 'ng2-file-upload';
import {FuseSharedModule} from '../../../../@fuse/shared.module';
import {MaintenanceCatalogueComponent} from './maintenance-catalogue.component';

@NgModule({
  imports: [
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,

      FileUploadModule,

      FuseSharedModule,
  ],
  declarations: [MaintenanceCatalogueComponent]
})
export class MaintenanceCatalogueModule { }
