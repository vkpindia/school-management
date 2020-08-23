import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../shared/material/material.module';

import { ParentsRoutingModule } from './parents-routing.module';
import { ParentsListComponent } from './parents-list/parents-list.component';
import { ParentEditComponent } from './parent-edit/parent-edit.component';
import { ParentAddComponent } from './parent-add/parent-add.component';
import { ParentDetailsComponent } from './parent-details/parent-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ParentsListComponent,
    ParentEditComponent,
    ParentAddComponent,
    ParentDetailsComponent
  ],
  imports: [
    CommonModule,
    ParentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    MaterialModule
  ]
})
export class ParentsModule { }
