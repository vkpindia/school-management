import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentsListComponent } from './parents-list/parents-list.component'
import { ParentAddComponent } from './parent-add/parent-add.component'
import { ParentEditComponent } from './parent-edit/parent-edit.component'
import { ParentDetailsComponent } from './parent-details/parent-details.component'


const routes: Routes = [
  {
    path: '',
    component: ParentsListComponent,
    data: {
      breadcrumb: 'List'
    }
  },
  {
    path: 'add',
    component: ParentAddComponent,
    data: {
      breadcrumb: 'Add'
    }
  },
  {
    path: 'edit/:id',
    component: ParentEditComponent,
    data: {
      breadcrumb: 'Edit'
    }
  },
  {
    path: 'detail',
    component: ParentDetailsComponent,
    data: {
      breadcrumb: 'Details'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentsRoutingModule { }
