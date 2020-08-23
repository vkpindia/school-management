import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions/transactions.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [TransactionsComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [TransactionsComponent, MaterialModule]
})
export class TransactionModule { }
