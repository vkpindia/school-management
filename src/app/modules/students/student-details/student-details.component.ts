import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/app/_services/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {

  public studentDetails: any;
  public paramID: number;
  public showDetails: boolean = false;
  public isLoading: boolean = true;

  constructor(private _route: Router, private _activatedRout: ActivatedRoute, private _ss: StudentsService) {
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
    this.getStudentDetails();
  }

  /**
   * @description Method to get unique student record
   * @author Virendra Pandey
   * @date 2020-07-01
   * @memberof StudentEditComponent
   */
  public getStudentDetails(): void {
    this._ss.getStudentDetails(this.paramID).subscribe(record => {
      if (record) {
        console.log('Student Details', record);
        this.studentDetails = record[0];
        this.showDetails = true;
        this.isLoading = false;
      }
    });
  }
}
