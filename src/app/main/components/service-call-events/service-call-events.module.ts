import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTableModule} from '@angular/material';
import {FuseSharedModule} from '../../../../@fuse/shared.module';
import {ServiceCallEventsComponent} from './service-call-events.component';
import {SharedModule} from '../../../shared/shared.module';
import {FuseHighlightComponent} from '../../../../@fuse/components/highlight/highlight.component';
import {FuseHighlightModule} from '../../../../@fuse/components';

@NgModule({
    imports: [
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,

        MatTableModule,
        MatPaginatorModule,

        FuseSharedModule,
        FuseHighlightModule,
        SharedModule,
    ],
    declarations: [
        ServiceCallEventsComponent
    ]
})
export class ServiceCallEventsModule {
}
