import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AssessmentService } from '../../../_services/assessment.service';
import { AuthenticationService } from '../../../_services/authentication.service';

@Component({
  selector: 'app-assessment-questions',
  templateUrl: './assessment-questions.component.html',
  styleUrls: ['./assessment-questions.component.scss'],
  providers: [DatePipe]
})

export class AssessmentQuestionsComponent implements OnInit {

  public isStartExam: boolean;
  public examID: number;
  constructor(private date: DatePipe, private authenticationService: AuthenticationService, private as: AssessmentService) { }

  ngOnInit(): void {
    this.isStartExam = true;
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-10-17
   * @memberof AssessmentQuestionsComponent
   */
  public startAssessment(): void {
    this.authenticationService.currentUser.subscribe(user => {
      this.as.getExamsByStudentID(new Date().toISOString(), user.id).subscribe(exam => {
        if (Array.isArray(exam) && exam.length) {
          this.examID = exam[0].id;
          this.isStartExam = false;
        } else {
          this.isStartExam = true;
          alert('Exams are not scheduled!');
        }
      });
    });
  }

/**
 * @description
 * @author Virendra Pandey
 * @date 2020-10-17
 * @memberof AssessmentQuestionsComponent
 */
  public getQuestions(): void {
    this.as.getQuestionByExamID(this.examID).subscribe(questions => {
      console.log('questions', questions);
    });
  }
}
