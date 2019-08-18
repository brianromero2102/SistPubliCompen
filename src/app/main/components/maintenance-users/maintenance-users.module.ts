import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTableModule} from '@angular/material';
import {FuseSharedModule} from '../../../../@fuse/shared.module';
import {MaintenanceUsersComponent} from './maintenance-users.component';

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
      MaintenanceUsersComponent
  ]
})
export class MaintenanceUsersModule { }
