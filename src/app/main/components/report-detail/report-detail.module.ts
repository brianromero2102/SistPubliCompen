import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReportDetailComponent} from './report-detail.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTableModule} from '@angular/material';
import {FuseSharedModule} from '../../../../@fuse/shared.module';

@NgModule({
  imports: [
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,

      MatTableModule,
      MatPaginatorModule,

      FuseSharedModule,
  ],
  declarations: [
      ReportDetailComponent,
  ]
})
export class ReportDetailModule { }
