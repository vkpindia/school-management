import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFeesComponent } from './add-fees/add-fees.component';
import { FeeTransactionComponent } from './fee-transaction/fee-transaction.component';


const routes: Routes = [
  {
    path: '',
    component: AddFeesComponent
  },
  {
    path: 'transactions',
    component: FeeTransactionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeesRoutingModule { }
