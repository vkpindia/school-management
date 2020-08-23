import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/_services/students.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit {

  public studentDetails: any;
  public paramID: number;
  public showForm: boolean = false;
  public isLoading: boolean = true;

  constructor(private _route: Router, private _activatedRout: ActivatedRoute, private _ss: StudentsService) {
    this._activatedRout.paramMap.subscribe(params => {
      console.log('params', params);
      this.paramID = params['params'].id;
    });
  }

  ngOnInit(): void {
    this.getStudentDetails();
  }

  /**
   * @description Method to get unique student record
   * @author Virendra Pandey
   * @date 2020-06-26
   * @memberof StudentEditComponent
   */
  public getStudentDetails(): void {
    this._ss.getStudentDetails(this.paramID).subscribe(record => {
      if (record) {
        console.log('record', record);
        this.studentDetails = record;
        this.showForm = true;
        this.isLoading = false;
      }
    });
  }

  /**
   * @description Method to navigate on list page after successfull form submission
   * @author Virendra Pandey
   * @date 2020-06-26
   * @param {*} event
   * @memberof StudentEditComponent
   */
  public onFormSubmit(event): void {
    console.log('event', event);
    if (event) {
      this._route.navigate(['./'], { relativeTo: this._activatedRout.parent });
    }
  }

  /**
   * @description Method to navigate on list page on cancel
   * @author Virendra Pandey
   * @date 2020-06-26
   * @param {*} event
   * @memberof StudentEditComponent
   */
  public onFormCancel(event): void {
    console.log('event', event);
    if (event) {
      this._route.navigate(['./'], { relativeTo: this._activatedRout.parent });
    }
  }
}
