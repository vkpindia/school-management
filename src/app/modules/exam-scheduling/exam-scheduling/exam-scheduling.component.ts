import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-scheduling',
  templateUrl: './exam-scheduling.component.html',
  styleUrls: ['./exam-scheduling.component.scss']
})
export class ExamSchedulingComponent implements OnInit {

  public isFormSubmit: any;
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-16
   * @param {*} event
   * @memberof NotificationComponent
   */
  public onFormSubmit(event): void {
    if (event) {
      this.isFormSubmit = event;
      console.log('isFormSubmit', this.isFormSubmit);
    }
  }

}
