import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentAdmissionComponent } from './student-admission/student-admission.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { MaterialModule } from '../../shared/material/material.module'

@NgModule({
  declarations: [
    StudentsListComponent,
    StudentAdmissionComponent,
    StudentEditComponent,
    StudentDetailsComponent,
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    MaterialModule
  ]
})
export class StudentsModule { }
