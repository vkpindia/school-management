import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpenseListComponent } from './expense-list/expense-list.component';
import { AddExpenseComponent } from './add-expense/add-expense.component';
import { EditExpenseComponent } from './edit-expense/edit-expense.component';


const routes: Routes = [
  {
    path: '',
    component: ExpenseListComponent,
    data: {
      breadcrumb: 'List',
    },
  },
  {
    path: 'add',
    component: ExpenseListComponent,
    data: {
      breadcrumb: 'Add',
    },
  },
  {
    path: 'edit/:id',
    component: EditExpenseComponent,
    data: {
      breadcrumb: 'Edit',
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseRoutingModule { }
