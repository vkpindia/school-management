import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassRoutingModule } from './class-routing.module';
import { ClassListComponent } from './class-list/class-list.component';
import { ClassAddComponent } from './class-add/class-add.component';
import { ClassEditComponent } from './class-edit/class-edit.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [ClassListComponent, ClassAddComponent, ClassEditComponent],
  imports: [
    CommonModule,
    ClassRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    MaterialModule
  ]
})
export class ClassModule { }
