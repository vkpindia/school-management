
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ExpenseService } from '../../../../_services/expense.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss'],
  providers: [DatePipe]
})

export class AddExpenseComponent implements OnInit {

  // Component properties variable declaration
  @Input() expenseDetails: any;
  @Output() formCancel: EventEmitter<any> = new EventEmitter<any>();
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();

  // VAriable declaration
  public expenseForm: FormGroup;
  public loading: boolean = false;
  public submitted: boolean = false;
  public returnUrl: string;
  public error: string = '';
  public cardTitle: string = 'Add New expenses';
  public showButtons: boolean = false;
  public showForm: boolean = true;
  public buttonLabel: string = 'Submit';
  public expensetypesList: any = [];
  public selectedType: string;
  private _phonePattern = '^[0-9-+s()]*$';
  private _emailPattern = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';

  public horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  public verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private _es: ExpenseService,
    private _ar: ActivatedRoute,
    private _router: Router,
    private _date: DatePipe,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.expenseForm = new FormGroup({

      //Requird Fields
      expensetype: new FormControl(null, Validators.required),
      totalamount: new FormControl(null, Validators.required),
      paidamount: new FormControl(null, Validators.required),
      pendingamount: new FormControl(null),
      date: new FormControl(new Date(), Validators.required),
      status: new FormControl(null, Validators.required),
      description: new FormControl(null)
    });

    console.log('expense details', this.expenseDetails);
    if (this.expenseDetails && this.expenseDetails.id) {
      this.cardTitle = 'Update Expense Record';
      this.buttonLabel = 'Update';
      this.showButtons = true;
    }

    // method to set data in form
    this.getExpensetypes();
  }

  /**
   * @description convenience getter for easy access to form fields
   * @readonly
   * @memberof  expenseAddComponent
   */
  get f() { return this.expenseForm.controls; }

  onAmountChange() {
    this.expenseForm.patchValue({
      pendingamount: this.expenseForm.value.totalamount - this.expenseForm.value.paidamount
    });
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-21
   * @memberof AddExpenseComponent
   */
  public getExpensetypes() {
    this.showForm = false;
    this._es.getExpenseTypes().subscribe(data => {
      if (data) {
        this.expensetypesList = data;
        if (this.expenseDetails && this.expenseDetails.id) {
          this.setDataToForm();
        } else {
          this.showForm = true;
        }

      }
    });
  }

  /**
   * @description Method to set data in form
   * @author Virendra Pandey
   * @date 2020-06-27
   * @memberof expenseAddComponent
   */
  public setDataToForm(): void {
    if (this.expenseDetails) {
      // this.selectedType = this.expenseDetails.expensetype;
      this.expenseForm.patchValue(this.expenseDetails);
    }
    this.showForm = true;
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-06-24
   * @returns undefined
   * @memberof expenseAddComponent
   */
  public onSubmit() {

    this.submitted = true;
    console.log('this.expenseForm.value', this.expenseForm.value);
    // console.log('this.expenseForm.invalid', this.expenseForm.invalid);
    if (this.expenseForm.value) {
      this.expenseForm.value.date = this._date.transform(this.expenseForm.value.date, 'MM/dd/yyyy');
    }

    // console.log('this.expenseForm.value.dateofexpense', this.expenseForm.value.dateofexpense);
    // stop here if form is invalid
    if (this.expenseForm.invalid) {
      return;
    }

    let payload = {};
    Object.assign(payload, this.expenseForm.value);

    this.loading = true;
    if (this.expenseDetails && this.expenseDetails.id) {
      payload['id'] = this.expenseDetails.id;
      this._es.updateExpense(this.expenseDetails.id, payload).subscribe(data => {
        this.formSubmit.emit(true);
        this.showNotification('Updated Successfully!!');
        this.expenseForm.reset();
        // this._router.navigate([this.returnUrl]);
      },
        error => {
          this.error = error;
          this.loading = false;
          console.error(this.error);
        });
    } else {
      this._es.saveExpense(payload).subscribe(data => {
        this.formSubmit.emit(true);
        this.showNotification('Submitted Successfully!!');
        this.expenseForm.reset();
        // this._router.navigate([this.returnUrl]);
      },
        error => {
          this.error = error;
          this.loading = false;
          console.error(this.error);
        });
    }
  }

  /**
   * @description Method to show notification
   * @author Virendra Pandey
   * @date 2020-06-24
   * @memberof expenseAddComponent
   */
  public showNotification(message: string): void {
    this._snackBar.open(message, '', {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['success-snackbar']
    });
  }

  /**
   * @description Method to reset form
   * @author Virendra Pandey
   * @date 2020-06-25
   * @memberof expenseAddComponent
   */
  public onFormReset(event: Event): void {
    if (event && this.expenseForm) {
      this.expenseForm.reset();
    }
  }

  /**
   * @description Method to cancel form
   * @author Virendra Pandey
   * @date 2020-06-25
   * @memberof expenseAddComponent
   */
  public onCancel(event: Event): void {
    if (event) {
      this.formCancel.emit(true);
    }
  }
}
