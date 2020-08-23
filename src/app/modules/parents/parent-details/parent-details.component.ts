import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParentsService } from '../../../_services/parents.service';

@Component({
  selector: 'app-parent-details',
  templateUrl: './parent-details.component.html',
  styleUrls: ['./parent-details.component.scss']
})
export class ParentDetailsComponent implements OnInit {

  public parentDetails: any;
  public paramID: number;
  public showDetails: boolean = false;
  public isLoading: boolean = true;

  constructor(private _route: Router, private _activatedRout: ActivatedRoute, private _ps: ParentsService) {
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
    this.getParentDetails();
  }

  /**
   * @description Method to get unique student record
   * @author Virendra Pandey
   * @date 2020-07-01
   * @memberof ParentDetailsComponent
   */
  public getParentDetails(): void {
    this._ps.getParentDetails(this.paramID).subscribe(record => {
      if (record) {
        console.log('Parent Details', record);
        this.parentDetails = record[0];
        this.showDetails = true;
        this.isLoading = false;
      }
    });
  }

}
