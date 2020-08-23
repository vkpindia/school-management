import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeachersService } from '../../../_services/teachers.service';

@Component({
  selector: 'app-teachers-edit',
  templateUrl: './teachers-edit.component.html',
  styleUrls: ['./teachers-edit.component.scss']
})
export class TeachersEditComponent implements OnInit {
  public teacherDetails: any;
  public paramID: number;
  public showForm: boolean = false;
  public isLoading: boolean = true;

  constructor(private _route: Router, private _activatedRout: ActivatedRoute, private _ts: TeachersService) {
    this._activatedRout.paramMap.subscribe(params => {
      console.log('params', params);
      this.paramID = params['params'].id;
    });
  }

  ngOnInit(): void {
    this.getteacherDetails();
  }

  /**
   * @description Method to get unique student record
   * @author Virendra Pandey
   * @date 2020-06-26
   * @memberof teacherEditComponent
   */
  public getteacherDetails(): void {
    this._ts.getTeacherDetails(this.paramID).subscribe(record => {
      if (record) {
        console.log('record', record);
        record[0].assignedclass = record[0].assignedclass == null ? [] : record[0].assignedclass.split(',');
        record[0].assignedsubject = record[0].assignedsubject == null ? [] : record[0].assignedsubject.split(',');
        record[0].qualification = record[0].qualification == null ? [] : record[0].qualification.split(',');
        record[0].subjects = record[0].subjects == null ? [] : record[0].subjects.split(',');
        this.teacherDetails = record;
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
   * @memberof teacherEditComponent
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
   * @memberof teacherEditComponent
   */
  public onFormCancel(event): void {
    console.log('event', event);
    if (event) {
      this._route.navigate(['./'], { relativeTo: this._activatedRout.parent });
    }
  }

}
