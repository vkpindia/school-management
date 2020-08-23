import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeachersService } from '../../../_services/teachers.service';

@Component({
  selector: 'app-teacher-details',
  templateUrl: './teacher-details.component.html',
  styleUrls: ['./teacher-details.component.scss']
})
export class TeacherDetailsComponent implements OnInit {

  public teacherDetails: any;
  public paramID: number;
  public showDetails: boolean = false;
  public isLoading: boolean = true;

  constructor(private _route: Router, private _activatedRout: ActivatedRoute, private _ts: TeachersService) {
    this._activatedRout.queryParamMap.subscribe(params => {
      console.log('params', params);
      if (params['params'].id) {
        this.paramID = params['params'].id;
      } else {
        this.paramID = 1;
      }
    });
  }

  ngOnInit(): void {
    this.getTeacherDetails();
  }

  /**
   * @description Method to get unique student record
   * @author Virendra Pandey
   * @date 2020-07-01
   * @memberof TeacherDetailsComponent
   */
  public getTeacherDetails(): void {
    this._ts.getTeacherDetails(this.paramID).subscribe(record => {
      if (record) {
        console.log('Teacher Details', record);
        this.teacherDetails = record[0];
        this.showDetails = true;
        this.isLoading = false;
      }
    });
  }
}
