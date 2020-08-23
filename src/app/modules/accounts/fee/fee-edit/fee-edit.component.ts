import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeeService } from '../../../../_services/fee.service';

@Component({
  selector: 'app-fee-edit',
  templateUrl: './fee-edit.component.html',
  styleUrls: ['./fee-edit.component.scss']
})
export class FeeEditComponent implements OnInit {

  public feeDetails: any;
  public paramID: number;
  public showForm: boolean = false;
  public isLoading: boolean = true;

  constructor(private _route: Router, private _activatedRout: ActivatedRoute, private _es: FeeService) {
    this._activatedRout.paramMap.subscribe(params => {
      this.paramID = params['params'].id;
    });
  }

  ngOnInit(): void {
    this.getParentDetails();
  }

  /**
   * @description Method to get unique student record
   * @author Virendra Pandey
   * @date 2020-06-26
   * @memberof FeeEditComponent
   */
  public getParentDetails(): void {
    this._es.getFeeDetails(this.paramID).subscribe(record => {
      if (record) {
        console.log('record', record);
        this.feeDetails = record[0];
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
   * @memberof FeeEditComponent
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
   * @memberof FeeEditComponent
   */
  public onFormCancel(event): void {
    console.log('event', event);
    if (event) {
      this._route.navigate(['./'], { relativeTo: this._activatedRout.parent });
    }
  }

}
