import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {DatatableComponent} from './commons/datatable/datatable.component';
import {MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTableModule} from '@angular/material';
import {FilterComponent} from './commons/filter/filter.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableComponent} from './commons/table/table.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        MatTableModule,
        MatPaginatorModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        DatatableComponent,
        TableComponent,
        FilterComponent
    ],
    exports: [
        DatatableComponent,
        TableComponent,
        FilterComponent
    ]
})
export class SharedModule {
}
