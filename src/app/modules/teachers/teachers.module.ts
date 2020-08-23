import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeacherAddComponent } from './teacher-add/teacher-add.component';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { TeachersEditComponent } from './teachers-edit/teachers-edit.component';
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component';


@NgModule({
  declarations: [TeacherAddComponent, TeachersListComponent, TeachersEditComponent, TeacherDetailsComponent],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    MaterialModule
  ]
})
export class TeachersModule { }
