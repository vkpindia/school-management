import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolRegistrationRoutingModule } from './school-registration-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { ApprovalLevelFirstComponent } from './approval-level-first/approval-level-first.component';
import { ApprovalLevelSecondComponent } from './approval-level-second/approval-level-second.component';
import { MaterialModule } from '../../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegistrationComponent,
    ApprovalLevelFirstComponent,
    ApprovalLevelSecondComponent
  ],
  imports: [
    CommonModule,
    SchoolRegistrationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class SchoolRegistrationModule { }
