import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeesRoutingModule } from './fees-routing.module';
import { FeesComponent } from './fees/fees.component';
import { AddFeesComponent } from './add-fees/add-fees.component';
import { FeesViewComponent } from './fees-view/fees-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../../shared/material/material.module';
import { TransactionModule } from '../../shared/transaction/transaction.module';
import { FeeTransactionComponent } from './fee-transaction/fee-transaction.component';


@NgModule({
  declarations: [FeesComponent, AddFeesComponent, FeesViewComponent, FeeTransactionComponent],
  imports: [
    CommonModule,
    FeesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    TransactionModule
  ]
})
export class FeesModule { }
