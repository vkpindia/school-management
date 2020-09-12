import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ParentsService } from '../../../_services/parents.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-parent-add',
  templateUrl: './parent-add.component.html',
  styleUrls: ['./parent-add.component.scss']
})

export class ParentAddComponent implements OnInit {

  // Component properties variable declaration
  @Input() parentDetails: any;
  @Output() formCancel: EventEmitter<any> = new EventEmitter<any>();
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();

  // VAriable declaration
  public parentForm: FormGroup;
  public loading: boolean = false;
  public submitted: boolean = false;
  public returnUrl: string;
  public error: string = '';
  public cardTitle: string = 'Add New Parents';
  public showButtons: boolean = false;
  public showForm: boolean = true;
  public buttonLabel: string = 'Next';
  public paramID: any;
  private _phonePattern = '^[0-9-+s()]*$';
  private _emailPattern = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';

  public horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  public verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private _ar: ActivatedRoute,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _ss: ParentsService
  ) {
    this._ar.queryParamMap.subscribe(params => {
      console.log('params student ID', params);
      this.paramID = params['params'].id;
    });
   }

  ngOnInit(): void {

    this.parentForm = new FormGroup({

      //Requird Fields
      // father details
      father_guardian_firstname  : new FormControl(null, Validators.required),
      familyname : new FormControl(null, Validators.required),
      father_guardian_adharnumber : new FormControl(null, [Validators.required, Validators.pattern('[0-9 ]{10}')]),
      father_guardian_qualification : new FormControl(null, Validators.required),
      father_guardian_occupation : new FormControl(null, Validators.required),
      father_guardian_mobilenumber : new FormControl(null, [Validators.required, Validators.pattern('[0-9 ]{10}')]),
      email : new FormControl(null, [Validators.required, Validators.pattern(this._emailPattern)]),

      // Mother fields
      mother_firstname : new FormControl(null, Validators.required),
      mother_aadharnumber : new FormControl(null, [Validators.required, Validators.pattern('[0-9 ]{12}')]),
      mother_qualification : new FormControl(null, Validators.required),
      mother_occupation : new FormControl(null, Validators.required),
      mother_phonenumber : new FormControl(null, [Validators.required, Validators.pattern('[0-9 ]{10}')]),

      //Optional Fields
      bank_accountnumber : new FormControl(null),
      bank_ifsccode : new FormControl(null),
      bank_addressbranch : new FormControl(null),
      bank_accountname : new FormControl(null),
      rationcardnumber : new FormControl(null),
      annualIncome : new FormControl(null),
      mothertoung : new FormControl(null),
      nationality  : new FormControl(null),
      bloodgroup : new FormControl(null),
      whatsappnumber : new FormControl(null,  Validators.pattern('[0-9 ]{10}'))
    });
    console.log('Parent details', this.parentDetails);
    if (this.parentDetails && this.parentDetails.id) {
      this.cardTitle = 'Update Parent Record';
      this.buttonLabel = 'Update';
      this.showButtons = true;
    }

    // method to set data in form
    this.setDataToForm();
  }


  /**
   * @description convenience getter for easy access to form fields
   * @readonly
   * @memberof  ParentAddComponent
   */
  get f() { return this.parentForm.controls; }

  /**
   * @description Method to set data in form
   * @author Virendra Pandey
   * @date 2020-06-27
   * @memberof ParentAddComponent
   */
  public setDataToForm(): void {
    if (this.parentDetails) {
      this.parentForm.patchValue(this.parentDetails);
    }
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-06-24
   * @returns undefined
   * @memberof ParentAddComponent
   */
  public onSubmit() {
    console.log('onSubmit');
    this.submitted = true;
    // console.log('this.parentForm.value', this.parentForm.value);
    if (this.parentForm.invalid) {
      return;
    }

    let payload = {};
    Object.assign(payload, this.parentForm.value);

    this.loading = true;
    if (this.parentDetails && this.parentDetails.id) {
      payload['id'] = this.parentDetails.id;
      payload['studentid'] = this.parentDetails.studentid;
      console.log('studentDetails.id', this.parentDetails.id);
      this._ss.updateparent(this.parentDetails.id, payload).subscribe(data => {
        this.formSubmit.emit(true);
        this.showNotification('Updated Successfully!!');
        this.parentForm.reset();
        // this._router.navigate([this.returnUrl]);
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
    } else {
      payload['studentid'] = parseInt(this.paramID);
      console.log('this.paramID', this.paramID);
      console.log('payload', payload);
      this._ss.postParent(payload).subscribe(data => {
        this.showNotification('Submitted Successfully!!');
        this.parentForm.reset();
        this._router.navigate(['/fees'], { queryParams: { id: this.paramID } });
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
   * @memberof ParentAddComponent
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
   * @memberof ParentAddComponent
   */
  public onFormReset(event: Event): void {
    if (event && this.parentForm) {
      this.parentForm.reset();
    }
  }

  /**
   * @description Method to cancel form
   * @author Virendra Pandey
   * @date 2020-06-25
   * @memberof ParentAddComponent
   */
  public onCancel(event: Event): void {
    if (event) {
      this.formCancel.emit(true);
    }
  }
}
