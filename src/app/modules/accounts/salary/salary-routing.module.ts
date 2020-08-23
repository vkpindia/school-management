import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSalaryComponent } from './add-salary/add-salary.component';
import { SalaryTransactionsComponent } from './salary-transactions/salary-transactions.component';


const routes: Routes = [
  {
    path: '',
    component: AddSalaryComponent
  },
  {
    path: 'transactions',
    component: SalaryTransactionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalaryRoutingModule { }
