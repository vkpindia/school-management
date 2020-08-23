import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { SetupService } from '../../_services/setup.service';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  public setupTypeList: any = [
    { value: 'villages', label: 'Transport' },
    { value: 'expensetypes', label: 'Expense Type' },
    { value: 'feetypes', label: 'Fee Type' },
    { value: 'salarytypes', label: 'Salary Type' }
  ];

  // VAriable declaration
  public setupForm: FormGroup;
  public loading: boolean = false;
  public showForm: boolean = true;
  public submitted: boolean = false;
  public error: string = '';
  public cardTitle: string = 'Add New Class';
  public selectedIndex: number;
  public classSectionList: any = [];
  public feeTypeList: any = [];
  public transportList: any = [];
  public expansesTypeList: any = [];
  public salaryTypeList: any = [];
  public expansesList: any = [];
  public fieldLabel: string;

  public horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  public verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private _ar: ActivatedRoute,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _cs: SetupService
  ) { }

  ngOnInit(): void {
    this.setupForm = new FormGroup({
      type: new FormControl(null, Validators.required),
      typename: new FormControl([], Validators.required),
      optionalparam: new FormControl(null),
    });

    //Getting all the setup list by calling below methods
    this.getTransportType();
    this.getExpansesType();
    this.getFeeType();
    this.getSaleType();
    this.getExpanses();
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-20
   * @memberof SetupComponent
   */
  public getFeeType() {
    this._cs.getFeeType().subscribe(data => {
      if (data) {
        this.feeTypeList = data;
      }
    });
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-20
   * @memberof SetupComponent
   */
  public getExpansesType() {
    this._cs.getExpanseTypes().subscribe(data => {
      if (data) {
        this.expansesTypeList = data;
      }
    });
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-20
   * @memberof SetupComponent
   */
  public getSaleType() {
    this._cs.getSalaryType().subscribe(data => {
      if (data) {
        this.salaryTypeList = data;
      }
    });
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-20
   * @memberof SetupComponent
   */
  public getTransportType() {
    this._cs.getTransportTypes().subscribe(data => {
      if (data) {
        this.transportList = data;
      }
    });
  }

  /**
 * @description
 * @author Virendra Pandey
 * @date 2020-07-20
 * @memberof SetupComponent
 */
  public getExpanses() {
    this._cs.getExpanses().subscribe(data => {
      if (data) {
        this.expansesList = data;
      }
    });
  }

  /**
   * @description convenience getter for easy access to form fields
   * @readonly
   * @memberof  ClassAddComponent
   */
  get f() { return this.setupForm.controls; }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-06-24
   * @returns undefined
   * @memberof ClassAddComponent
   */
  public onSubmit() {
    console.log('onSubmit');
    this.submitted = true;

    if (this.setupForm.invalid) {
      return;
    }
    let payload = {};

    this.loading = true;
    Object.assign(payload, this.setupForm.value);
    delete payload['section'];
    this._cs.saveSetup(payload).subscribe(data => {
      this.showNotification('Submitted Successfully!!');
      if (this.setupForm.value.type == 'villages') {
        this.getTransportType();
      } else if (this.setupForm.value.type == 'expensetypes') {
        this.getExpansesType();
      } else if (this.setupForm.value.type == 'feetypes') {
        this.getFeeType();
      } else if (this.setupForm.value.type == 'salarytypes') {
        this.getSaleType();
      } else {
        this.getExpanses();
      }
      this.setupForm.reset();
      this.showForm = false;
        setTimeout(() => {
          this.showForm = true;
        }, 50);
    },
      error => {
        this.error = error;
        this.loading = false;
        console.error(this.error);
      });
  }

  public onSetupTypeChange(event): void {
    if (event) {
      if (event.value == 'villages') {
        this.fieldLabel = 'Transport Type';
      } else if (event.value == 'expensetypes') {
        this.fieldLabel = 'Expense Type';
      } else if (event.value == 'feetypes') {
        this.fieldLabel = 'Fee Type';
      } else if (event.value == 'salarytypes') {
        this.fieldLabel = 'Salary Type';
      }
    }
  }
  /**
   * @description Method to show notification
   * @author Virendra Pandey
   * @date 2020-06-24
   * @memberof ClassAddComponent
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
   * @memberof ClassAddComponent
   */
  public onFormReset(event): void {
    if (event) {
      this.setupForm.reset();
    }
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-20
   * @param {*} typeID
   * @param {*} type
   * @memberof SetupComponent
   */
  deleteTransportType(typeID, type): void {
    let isDelete = confirm("Are you sure u want to delete "+type+" type?")
    if(isDelete){
      this._cs.deleteEvent(typeID.id, type).subscribe(data=>{
        if (type == 'transport') {
          this.getTransportType();
        } else if (type == 'expanse') {
          this.getExpansesType();
        } else if (type == 'fee') {
          this.getFeeType();
        } else if (type == 'salary') {
          this.getSaleType();
        }
      })
    }
  }

}
