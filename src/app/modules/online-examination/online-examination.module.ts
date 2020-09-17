import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamSetupComponent } from './exam-setup/exam-setup.component';
import { ExamResultComponent } from './exam-result/exam-result.component';
import { AssessmentQuestionsComponent } from './assessment-questions/assessment-questions.component';
import { OnlineExaminationRoutingModule } from './online-examination-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '../../shared/material/material.module';



@NgModule({
  declarations: [ExamSetupComponent, ExamResultComponent, AssessmentQuestionsComponent],
  imports: [
    CommonModule,
    OnlineExaminationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    MaterialModule
  ]
})
export class OnlineExaminationModule { }
