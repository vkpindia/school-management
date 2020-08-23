import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamSchedulingRoutingModule } from './exam-scheduling-routing.module';
import { ExamSchedulingComponent } from './exam-scheduling/exam-scheduling.component';
import { AddSchedulingComponent } from './add-scheduling/add-scheduling.component';
import { SchedulingListComponent } from './scheduling-list/scheduling-list.component';

import { MaterialModule } from '../../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ExamSchedulingComponent, AddSchedulingComponent, SchedulingListComponent],
  imports: [
    CommonModule,
    ExamSchedulingRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    MaterialModule
  ]
})
export class ExamSchedulingModule { }
