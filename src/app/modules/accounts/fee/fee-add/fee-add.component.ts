import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { FeeService } from '../../../../_services/fee.service';

@Component({
  selector: 'app-fee-add',
  templateUrl: './fee-add.component.html',
  styleUrls: ['./fee-add.component.scss']
})
export class FeeAddComponent implements OnInit {

  // Component properties variable declaration
  @Input() feeDetails: any;
  @Output() formCancel: EventEmitter<any> = new EventEmitter<any>();
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();

  // VAriable declaration
  public feeForm: FormGroup;
  public loading: boolean = false;
  public submitted: boolean = false;
  public returnUrl: string;
  public error: string = '';
  public cardTitle: string = 'Add New fee';
  public showButtons: boolean = false;
  public showForm: boolean = true;
  public buttonLabel: string = 'Submit';
  public feetypesList: any = [];
  public sectionList: any = [];
  public classList: any = [];
  public termList: any = [];
  public selectedType: string;
  private _phonePattern = '^[0-9-+s()]*$';
  private _emailPattern = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';

  public horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  public verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private _es: FeeService,
    private _ar: ActivatedRoute,
    private _router: Router,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.feeForm = new FormGroup({

      //Requird Fields
      classid: new FormControl(null, Validators.required),
      sectionid: new FormControl(null, Validators.required),
      feetypeid: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      termid: new FormControl(null, Validators.required),
      description: new FormControl(null)
    });

    console.log('fee details', this.feeDetails);
    if (this.feeDetails && this.feeDetails.id) {
      this.cardTitle = 'Update fee Record';
      this.buttonLabel = 'Update';
      this.showButtons = true;
    }

    // method to set data in form
    this.getfeetypes();
    this.getTerm();
    this.getClassSection();
    this.setDataToForm();
  }

  /**
   * @description convenience getter for easy access to form fields
   * @readonly
   * @memberof  feeAddComponent
   */
  get f() { return this.feeForm.controls; }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-21
   * @memberof AddfeeComponent
   */
  public getfeetypes() {
    this.showForm = false;
    this._es.getFeeType().subscribe(data => {
      if (data) {
        this.feetypesList = data;
      }
    });
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-21
   * @memberof AddfeeComponent
   */
  public getTerm() {
    this.showForm = false;
    this._es.getTerms().subscribe(data => {
      if (data) {
        this.termList = data;
      }
    });
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-21
   * @memberof AddfeeComponent
   */
  public getClassSection() {
    this.showForm = false;
    this._es.getClassSection().subscribe(data => {
      if (data) {
        this.classList = data;
      }
    });
  }

    /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-19
   * @param {*} event
   * @memberof ClassAddComponent
   */
  public onClassChange(event):void {
    if(event){
       this._es.getSections(event.value).subscribe(section=>{
         if(section){
           this.sectionList = section;
         }
      })
    }
  }
  /**
   * @description Method to set data in form
   * @author Virendra Pandey
   * @date 2020-06-27
   * @memberof feeAddComponent
   */
  public setDataToForm(): void {
    if (this.feeDetails) {
      // this.selectedType = this.feeDetails.feetype;
      this.feeDetails.classid = this.feeDetails.classid.toString();
      this.feeDetails.classid = this.feeDetails.classid.toString();
      this.feeForm.patchValue(this.feeDetails);
    }
    this.showForm = true;
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-06-24
   * @returns undefined
   * @memberof feeAddComponent
   */
  public onSubmit() {

    this.submitted = true;
    console.log('this.feeForm.value', this.feeForm.value);
    // console.log('this.feeForm.invalid', this.feeForm.invalid);
    if (this.feeForm.value) {
      this.feeForm.value.classid = parseInt(this.feeForm.value.classid);
      this.feeForm.value.sectionid = parseInt(this.feeForm.value.sectionid);
      this.feeForm.value.feetypeid = parseInt(this.feeForm.value.feetypeid);
      this.feeForm.value.termid = parseInt(this.feeForm.value.termid);
    }
    console.log('this.feeForm.value.classid', this.feeForm.value.classid);

    // console.log('this.feeForm.value.dateoffee', this.feeForm.value.dateoffee);
    // stop here if form is invalid
    if (this.feeForm.invalid) {
      return;
    }

    let payload = {};
    Object.assign(payload, this.feeForm.value);

    this.loading = true;
    if (this.feeDetails && this.feeDetails.id) {
      console.log('this.feeForm.value.classid123', this.feeForm.value.classid);
      payload['id'] = this.feeDetails.id;
      this._es.updateFee(this.feeDetails.id, payload).subscribe(data => {
        this.formSubmit.emit(true);
        this.showNotification('Updated Successfully!!');
        this.feeForm.reset();
        // this._router.navigate([this.returnUrl]);
      },
        error => {
          this.error = error;
          this.loading = false;
          console.error(this.error);
        });
    } else {
      this._es.saveFee(payload).subscribe(data => {
        this.formSubmit.emit(true);
        this.showNotification('Submitted Successfully!!');
        this.feeForm.reset();
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
   * @memberof feeAddComponent
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
   * @memberof feeAddComponent
   */
  public onFormReset(event: Event): void {
    if (event && this.feeForm) {
      this.feeForm.reset();
    }
  }

  /**
   * @description Method to cancel form
   * @author Virendra Pandey
   * @date 2020-06-25
   * @memberof feeAddComponent
   */
  public onCancel(event: Event): void {
    if (event) {
      this.formCancel.emit(true);
    }
  }
}
