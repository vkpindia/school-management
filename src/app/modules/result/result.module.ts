import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultRoutingModule } from './result-routing.module';
import { ResultListComponent } from './exam-result/result-list.component';
import { AddResultComponent } from './add-result/add-result.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { StudentResultComponent } from './student-result/student-result.component';


@NgModule({
  declarations: [ResultListComponent, AddResultComponent, StudentResultComponent],
  imports: [
    CommonModule,
    ResultRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    MaterialModule
  ]
})
export class ResultModule { }
