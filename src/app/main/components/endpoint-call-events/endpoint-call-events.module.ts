import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTableModule} from '@angular/material';
import {FuseSharedModule} from '../../../../@fuse/shared.module';
import {EndpointCallEventsComponent} from './endpoint-call-events.component';
import {SharedModule} from '../../../shared/shared.module';

@NgModule({
  imports: [
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,

      MatTableModule,
      MatPaginatorModule,

      FuseSharedModule,
      SharedModule,
  ],
  declarations: [
      EndpointCallEventsComponent
  ]
})
export class EndpointCallEventsModule { }
