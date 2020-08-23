import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamSchedulingComponent } from './exam-scheduling/exam-scheduling.component'


const routes: Routes = [
  {
    path: '',
    component: ExamSchedulingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamSchedulingRoutingModule { }
