import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeeListComponent } from './fee-list/fee-list.component';
import { FeeEditComponent } from './fee-edit/fee-edit.component';


const routes: Routes = [
  {
    path: '',
    component: FeeListComponent,
    data: {
      breadcrumb: 'List',
    },
  },
  {
    path: 'add',
    component: FeeListComponent,
    data: {
      breadcrumb: 'Add',
    },
  },
  {
    path: 'edit/:id',
    component: FeeEditComponent,
    data: {
      breadcrumb: 'Edit',
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeeRoutingModule { }
