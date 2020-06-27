import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../../../_services/students.service';
import { DatePipe } from '@angular/common';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-student-admission',
  templateUrl: './student-admission.component.html',
  styleUrls: ['./student-admission.component.scss'],
  providers: [DatePipe]
})

export class StudentAdmissionComponent implements OnInit {

  @Input() studentDetails: any;
  @Output() formCancel: EventEmitter<any> = new EventEmitter<any>();
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();

  public admissionForm: FormGroup;
  public loading: boolean = false;
  public submitted: boolean = false;
  public returnUrl: string;
  public error: string = '';
  public cardTitle: string = 'Add New Students';
  public showButtons: boolean = false;
  public horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  public verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private _ar: ActivatedRoute,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _ss: StudentsService,
    private _date: DatePipe
  ) { }

  ngOnInit(): void {
    this.admissionForm = new FormGroup({

      //Requird Fields
      // id: new FormControl(0, Validators.required),
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      dob: new FormControl(null, Validators.required),
      sex: new FormControl(null, Validators.required),
      adminnumber: new FormControl(null, Validators.required),
      enrolnumber: new FormControl(null, Validators.required),
      dateofadmission: new FormControl(null, Validators.required),
      Class: new FormControl(null, Validators.required),
      rollnumber: new FormControl(null, Validators.required),
      section: new FormControl(null, Validators.required),
      fee: new FormControl(null, Validators.required),
      cast: new FormControl(null, Validators.required),
      religion: new FormControl(null, Validators.required),
      Mothertoung: new FormControl(null, Validators.required),
      nationality: new FormControl(null, Validators.required),
      bloodgroup: new FormControl(null, Validators.required),
      mobilenumber: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      whatsappnumber: new FormControl(null, [Validators.required, Validators.minLength(10)]),

      //Optional Fields
      adharnumber: new FormControl(null, Validators.minLength(12)),
      biometricid: new FormControl(null),
      busroute: new FormControl(null),
      busnumber: new FormControl(null),
      hostelblock: new FormControl(null),
      hostelroom: new FormControl(null),
      previousclass: new FormControl(null),
      previousschoolname: new FormControl(null),
      previousschooladdress: new FormControl(null)
    });
    console.log('studentDetails', this.studentDetails);
    if (this.studentDetails && this.studentDetails[0].id) {
      this.cardTitle = 'Update Student Record';
      this.showButtons = true;
    }

    // method to set data in form
    this.setDataToForm();
  }


  /**
   * @description convenience getter for easy access to form fields
   * @readonly
   * @memberof  StudentAdmissionComponent
   */
  get f() { return this.admissionForm.controls; }

  /**
   * @description Method to set data in form
   * @author Virendra Pandey
   * @date 2020-06-27
   * @memberof StudentAdmissionComponent
   */
  public setDataToForm(): void {
    if (this.studentDetails) {
      this.admissionForm.patchValue(this.studentDetails[0]);
    }
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-06-24
   * @returns undefined
   * @memberof StudentAdmissionComponent
   */
  public onSubmit() {
    console.log('onSubmit');
    this.submitted = true;
    console.log('this.admissionForm.value', this.admissionForm.value);
    // console.log('this.admissionForm.invalid', this.admissionForm.invalid);
    if (this.admissionForm.value) {
      this.admissionForm.value.Class = parseInt(this.admissionForm.value.Class, 10);
      this.admissionForm.value.dob = this._date.transform(this.admissionForm.value.dob, 'MM/dd/yyyy');
      this.admissionForm.value.dateofadmission = this._date.transform(this.admissionForm.value.dateofadmission, 'MM/dd/yyyy');
    }

    // console.log('this.admissionForm.value.dateofadmission', this.admissionForm.value.dateofadmission);
    // stop here if form is invalid
    if (this.admissionForm.invalid) {
      return;
    }

    this.loading = true;
    if (this.studentDetails && this.studentDetails[0].id) {
      console.log('studentDetails.id', this.studentDetails.id);
      this._ss.updateStudent(this.admissionForm.value).subscribe(data => {
        this.formSubmit.emit(true);
        this.showNotification('Updated Successfully!!');
        this.admissionForm.reset();
        // this._router.navigate([this.returnUrl]);
      },
        error => {
          this.error = error;
          this.loading = false;
          console.error(this.error);
        });
    } else {
      this._ss.postStudent(this.admissionForm.value).subscribe(data => {
        console.log('data', data);
        this.showNotification('Submitted Successfully!!');
        this.admissionForm.reset();
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
   * @memberof StudentAdmissionComponent
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
   * @memberof StudentAdmissionComponent
   */
  public onFormReset(event: Event): void {
    if (event && this.admissionForm) {
      this.admissionForm.reset();
    }
  }

  /**
   * @description Method to cancel form
   * @author Virendra Pandey
   * @date 2020-06-25
   * @memberof StudentAdmissionComponent
   */
  public onCancel(event: Event): void {
    if (event) {
      this.formCancel.emit(true);
    }
  }
}
