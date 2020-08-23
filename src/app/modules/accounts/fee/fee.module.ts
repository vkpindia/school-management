import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { FeeRoutingModule } from './fee-routing.module';
import { FeeListComponent } from './fee-list/fee-list.component';
import { FeeAddComponent } from './fee-add/fee-add.component';
import { FeeEditComponent } from './fee-edit/fee-edit.component';


@NgModule({
  declarations: [FeeListComponent, FeeAddComponent, FeeEditComponent],
  imports: [
    CommonModule,
    FeeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    MaterialModule
  ]
})
export class FeeModule { }
