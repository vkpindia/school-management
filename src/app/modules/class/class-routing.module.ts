import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassListComponent } from './class-list/class-list.component';
import { ClassAddComponent } from './class-add/class-add.component';
import { ClassEditComponent } from './class-edit/class-edit.component';


const routes: Routes = [
  {
    path: '',
    component: ClassListComponent,
    data: {
      breadcrumb: 'List',
    },
  },
  {
    path: 'add',
    component: ClassAddComponent,
    data: {
      breadcrumb: 'Add',
    },
  },
  {
    path: 'edit/:id',
    component: ClassEditComponent,
    data: {
      breadcrumb: 'Edit',
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassRoutingModule { }
