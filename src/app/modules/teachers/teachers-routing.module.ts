import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeachersListComponent } from './teachers-list/teachers-list.component'
import { TeacherAddComponent } from './teacher-add/teacher-add.component'
import { TeachersEditComponent } from './teachers-edit/teachers-edit.component'
import { TeacherDetailsComponent } from './teacher-details/teacher-details.component'


const routes: Routes = [
  {
    path: '',
    component: TeachersListComponent,
    data: {
      breadcrumb: 'List'
    }
  },
  {
    path: 'add',
    component: TeacherAddComponent,
    data: {
      breadcrumb: 'Add'
    }
  },
  {
    path: 'edit/:id',
    component: TeachersEditComponent,
    data: {
      breadcrumb: 'Edit'
    }
  },
  {
    path: 'detail',
    component: TeacherDetailsComponent,
    data: {
      breadcrumb: 'Details'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
