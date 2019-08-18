import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EndpointCallEventsComponent} from './endpoint-call-events/endpoint-call-events.component';
import {ServiceCallEventsComponent} from './service-call-events/service-call-events.component';
import {MaintenanceBackofficeComponent} from './maintenance-backoffice/maintenance-backoffice.component';
import {MaintenanceEmployeeComponent} from './maintenance-employee/maintenance-employee.component';
import {MaintenanceOrderFlightComponent} from './maintenance-order-flight/maintenance-order-flight.component';
import {MaintenanceStockComponent} from './maintenance-stock/maintenance-stock.component';
import {MaintenanceTypeReccesedComponent} from './maintenance-type-reccesed/maintenance-type-reccesed.component';
import {MaintenancePlacesComponent} from './maintenance-places/maintenance-places.component';
import {RouterModule, Routes} from '@angular/router';
import {FuseSharedModule} from '../../../@fuse/shared.module';
import {ComponentsComponent} from './components.component';
import {EndpointCallEventsModule} from './endpoint-call-events/endpoint-call-events.module';
import {MaintenanceBackofficeModule} from './maintenance-backoffice/maintenance-backoffice.module';
import {MaintenanceEmployeeModule} from './maintenance-employee/maintenance-employee.module';
import {MaintenanceOrderFlightModule} from './maintenance-order-flight/maintenance-order-flight.module';
import {MaintenancePlacesModule} from './maintenance-places/maintenance-places.module';
import {MaintenanceStockModule} from './maintenance-stock/maintenance-stock.module';
import {MaintenanceTypeReccesedModule} from './maintenance-type-reccesed/maintenance-type-reccesed.module';
import {MaintenanceUsersModule} from './maintenance-users/maintenance-users.module';
import {ServiceCallEventsModule} from './service-call-events/service-call-events.module';
import {MatIconModule} from '@angular/material';
import {SharedModule} from '../../shared/shared.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {JwtInterceptor} from '../../shared/interceptors/jwt.interceptor';
import {MaintenanceTechnologyComponent} from './maintenance-technology/maintenance-technology.component';
import {MaintenanceTechnologyModule} from './maintenance-technology/maintenance-technology.module';
import {MaintenanceCatalogueComponent} from './maintenance-catalogue/maintenance-catalogue.component';
import {MaintenanceCatalogueModule} from './maintenance-catalogue/maintenance-catalogue.module';
import {MaintenanceUsersComponent} from './maintenance-users/maintenance-users.component';
import {ReportDetailComponent} from './report-detail/report-detail.component';
import {ReportDetailModule} from './report-detail/report-detail.module';
import {ReportGeneralModule} from './report-general/report-general.module';
import {ReportGeneralComponent} from './report-general/report-general.component';


const routes: Routes = [
    {
        path: '',
        component: ComponentsComponent,
        children: [
            {path: 'endpoint-call-events', component: EndpointCallEventsComponent},
            {path: 'service-call-events', component: ServiceCallEventsComponent},
            {path: 'maintenance-backoffice', component: MaintenanceBackofficeComponent},
            {path: 'maintenance-employee', component: MaintenanceEmployeeComponent},
            {path: 'maintenance-order-flight', component: MaintenanceOrderFlightComponent},
            {path: 'maintenance-places', component: MaintenancePlacesComponent},
            {path: 'maintenance-stock', component: MaintenanceStockComponent},
            {path: 'maintenance-type-reccessed', component: MaintenanceTypeReccesedComponent},
            {path: 'maintenance-catalogue', component: MaintenanceCatalogueComponent},
            {path: 'maintenance-technology', component: MaintenanceTechnologyComponent},
            {path: 'maintenance-users', component: MaintenanceUsersComponent},
            {path: 'report-detail', component: ReportDetailComponent},
            {path: 'report-general', component: ReportGeneralComponent},
        ]
    }
];

@NgModule({
    imports: [
        MatIconModule,

        FuseSharedModule,

        EndpointCallEventsModule,
        MaintenanceBackofficeModule,
        MaintenanceEmployeeModule,
        MaintenanceOrderFlightModule,
        MaintenancePlacesModule,
        MaintenancePlacesModule,
        MaintenanceStockModule,
        MaintenanceTypeReccesedModule,
        MaintenanceUsersModule,
        MaintenanceTechnologyModule,
        MaintenanceCatalogueModule,
        ServiceCallEventsModule,
        ReportDetailModule,
        ReportGeneralModule,

        RouterModule.forChild(routes)
    ],
    declarations: [
        ComponentsComponent,
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    ]
})

export class ComponentsModule {
}
