import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { StudentsComponent } from './students/students.component';
import { ParentsComponent } from './parents/parents.component';
import { TeachersComponent } from './teachers/teachers.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    data: {
      breadcrumb: 'Admin',
    },
  },
  {
    path: 'students',
    component: StudentsComponent,
    data: {
      breadcrumb: 'Students',
    },
  },
  {
    path: 'parents',
    component: ParentsComponent,
    data: {
      breadcrumb: 'Parents',
    },
  },
  {
    path: 'teachers',
    component: TeachersComponent,
    data: {
      breadcrumb: 'Teachers',
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
