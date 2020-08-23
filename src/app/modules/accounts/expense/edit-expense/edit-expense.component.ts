import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseService } from '../../../../_services/expense.service';

@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.scss']
})
export class EditExpenseComponent implements OnInit {

  public expenseDetails: any;
  public paramID: number;
  public showForm: boolean = false;
  public isLoading: boolean = true;

  constructor(private _route: Router, private _activatedRout: ActivatedRoute, private _es: ExpenseService) {
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
   * @memberof EditExpenseComponent
   */
  public getParentDetails(): void {
    this._es.getExpenseDetails(this.paramID).subscribe(record => {
      if (record) {
        console.log('record', record);
        this.expenseDetails = record[0];
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
   * @memberof EditExpenseComponent
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
   * @memberof EditExpenseComponent
   */
  public onFormCancel(event): void {
    console.log('event', event);
    if (event) {
      this._route.navigate(['./'], { relativeTo: this._activatedRout.parent });
    }
  }

}
