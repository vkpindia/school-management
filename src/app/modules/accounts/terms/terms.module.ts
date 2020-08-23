import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { TermsRoutingModule } from './terms-routing.module';
import { TermListComponent } from './term-list/term-list.component';
import { TermAddComponent } from './term-add/term-add.component';
import { TermEditComponent } from './term-edit/term-edit.component';


@NgModule({
  declarations: [TermListComponent, TermAddComponent, TermEditComponent],
  imports: [
    CommonModule,
    TermsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    MaterialModule
  ]
})
export class TermsModule { }
