import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamSetupComponent } from './exam-setup/exam-setup.component';
import { ExamResultComponent } from './exam-result/exam-result.component';
import { AssessmentQuestionsComponent } from './assessment-questions/assessment-questions.component';

const routes: Routes = [
  {
    path: '',
    component: ExamSetupComponent,
    data: {
      breadcrumb: 'Setup'
    }
  },
  {
    path: 'questions',
    component: AssessmentQuestionsComponent,
    data: {
      breadcrumb: 'Questions'
    }
  },
  {
    path: 'result',
    component: ExamResultComponent,
    data: {
      breadcrumb: 'Result'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OnlineExaminationRoutingModule { }
