import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentAdmissionComponent } from './student-admission/student-admission.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentDetailsComponent } from './student-details/student-details.component';


const routes: Routes = [
  {
    path: '',
    component: StudentsListComponent,
    data: {
      breadcrumb: 'List'
    }
  },
  {
    path: 'admission',
    component: StudentAdmissionComponent,
    data: {
      breadcrumb: 'Admission'
    }
  },
  {
    path: 'edit/:id',
    component: StudentEditComponent,
    data: {
      breadcrumb: 'Edit'
    }
  },
  {
    path: 'details',
    component: StudentDetailsComponent,
    data: {
      breadcrumb: 'Details'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
