import { DatePipe } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AssessmentService } from '../../../_services/assessment.service';
import { AuthenticationService } from '../../../_services/authentication.service';
import { TimeSpan } from '../../../_models/timestamp.model';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-assessment-questions',
  templateUrl: './assessment-questions.component.html',
  styleUrls: ['./assessment-questions.component.scss'],
  providers: [DatePipe]
})

export class AssessmentQuestionsComponent implements OnInit, OnDestroy {

  public isStartExam: boolean;
  public examID: number;
  public startIndex: number;
  public endIndex: number;
  public questionAnsList: Array<any> = [];
  public showQuestions: boolean;
  public examDetails: Array<any> = [];
  public allottedTime: number;
  public tick: number = 1000;
  public btnLabel = 'Next';
  public examResult: any = {};
  public obtainedMark: number = 0;
  public countDown: Subscription;
  public timespend: number;
  public showResult: boolean;

  constructor(
    private date: DatePipe,
    private authenticationService: AuthenticationService,
    private as: AssessmentService) { }

  ngOnInit(): void {
    this.isStartExam = true;
    this.showResult = true;
    this.showQuestions = false;
    this.startIndex = 0;
    this.endIndex = 1;
    if (this.questionAnsList && this.questionAnsList.length) {
      this.countDown = timer(0, this.tick).subscribe(() => {
        let spendTime = --this.allottedTime;
        if (spendTime === 0) {
          this.insertResult();
        }
      });
    }
    this.startAssessment();
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-10-17
   * @memberof AssessmentQuestionsComponent
   */
  public startAssessment(): void {
    this.authenticationService.currentUser.subscribe(user => {
      this.as.getExamsByStudentID(this.date.transform(new Date(), '2020-10-23'), user.id).subscribe(exam => {
        if (Array.isArray(exam) && exam.length) {
          this.examDetails = exam;
          this.examID = exam[0].id;
          this.isStartExam = false;
          this.allottedTime = this.examDetails[0].timeallotted * 60;
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
    this.as.getQuestionByExamID(this.examDetails[0].id).subscribe(questions => {
      if (Array.isArray(questions) && questions.length > 0) {
        this.countDown = timer(0, this.tick).subscribe(() => {
          if (--this.allottedTime === 0) {
            this.insertResult();
          }
          return --this.allottedTime;
        });
        this.showQuestions = true;
        this.questionAnsList = questions;
      }
    });
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-10-24
   * @memberof AssessmentQuestionsComponent
   */
  public nextQuestion(): void {

    this.startIndex = this.startIndex + 1;
    this.endIndex = this.endIndex + 1;

    if (this.endIndex === this.questionAnsList.length) {
      this.btnLabel = 'Submit';
    }

    if (this.endIndex > this.questionAnsList.length) {
      // submit logic
      this.insertResult();
    }
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-10-24
   * @memberof AssessmentQuestionsComponent
   */
  public insertResult() {
    this.examResult = {
      examid: this.examDetails[0].id,
      studentid: JSON.parse(localStorage.getItem('currentUser')).id,
      totalmarks: this.examDetails[0].totalmarks,
      actualmarks: this.obtainedMark,
    };
    this.as.addExamResults(this.examResult).subscribe(data => {
      this.showResult = false;
    });
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-10-24
   * @param {*} $event
   * @param {*} i
   * @memberof AssessmentQuestionsComponent
   */
  public onSelection(event, id): void {
    this.questionAnsList.map(question => {
      if (id === question.id && event.value === question.rightanswer) {
        this.obtainedMark += question.marksforthis;
      }
    });
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-10-24
   * @memberof AssessmentQuestionsComponent
   */
  public prevQuestion(): void {

    this.startIndex = this.startIndex - 1;
    this.endIndex = this.endIndex - 1;
    if (this.endIndex < this.questionAnsList.length) {
      this.btnLabel = 'Next';
    }
  }

  /* Destroy counter */
  ngOnDestroy(): void {
    // this.countDown.unsubscribe();
  }

}
