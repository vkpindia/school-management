import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalaryRoutingModule } from './salary-routing.module';
import { AddSalaryComponent } from './add-salary/add-salary.component';
import { SalaryListComponent } from './salary-list/salary-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../../../shared/material/material.module';
import { SalaryTransactionsComponent } from './salary-transactions/salary-transactions.component';
import { TransactionModule } from 'src/app/shared/transaction/transaction.module';

@NgModule({
  declarations: [AddSalaryComponent, SalaryListComponent, SalaryTransactionsComponent],
  imports: [
    CommonModule,
    SalaryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    TransactionModule
  ]
})
export class SalaryModule { }
