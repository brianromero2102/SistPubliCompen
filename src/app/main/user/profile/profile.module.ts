import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
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
  declarations: [ProfileComponent]
})
export class ProfileModule { }
