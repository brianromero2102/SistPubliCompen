import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IRequestLog} from '../../interfaces/log.interface';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {MY_FORMATS} from '../../global/const';
import {formatDate} from '../../global/utils';


@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
    providers: [
        {provide: MAT_DATE_LOCALE, useValue: 'es-ES'},
        {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
        {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
    ],
})
export class FilterComponent implements OnInit {

    @Output() emitOperation: EventEmitter<IRequestLog> = new EventEmitter<IRequestLog>();

    formFilter: FormGroup;

    constructor(public formBuilder: FormBuilder) {
    }

    ngOnInit(): void {
        this.formFilter = this.formBuilder.group({
            startDate: ['', Validators.required],
            endDate: ['', Validators.required]
        });
    }

    sendOperation(): void {
        if (this.formFilter.valid) {
            this.emitOperation.emit({
                startDate: formatDate(this.formFilter.get('startDate').value),
                endDate: formatDate(this.formFilter.get('endDate').value),
            });
        } else {
            alert('necesita completar los filtros');
        }
    }

}

