import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../../../_services/students.service';
import { DatePipe } from '@angular/common';
import { SchoolRegistrationService } from '../../../_services/school-registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
  providers: [DatePipe]
})
export class RegistrationComponent implements OnInit {

  // Component properties letiable declaration
  @Input() studentDetails: any;
  @Output() formCancel: EventEmitter<any> = new EventEmitter<any>();
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();

  // letiable declaration
  public admissionForm: FormGroup;
  public imageSrc: string;
  public imageSrc1: string;
  public imageSrc2: string;
  public loading: boolean = false;
  public submitted: boolean = false;
  public error: string = '';
  public cardTitle: string = 'Registration Form';
  public showForm: boolean = true;
  public buttonLabel: string = 'Next';
  public horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  public verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  private _emailPattern = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';



  constructor(
    private _ar: ActivatedRoute,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _ss: SchoolRegistrationService,
    private _date: DatePipe
  ) { }

  ngOnInit(): void {
    this.admissionForm = new FormGroup({

      //Requird Fields
      // id: new FormControl(0, Validators.required),
      schoolname: new FormControl(null, Validators.required),
      schoolicon: new FormControl(null),
      schoolbanner: new FormControl(null),
      schooladdress: new FormControl(null, Validators.required),
      startdate: new FormControl(null, Validators.required),
      enddate: new FormControl(null, Validators.required),
      directorname: new FormControl(null, Validators.required),
      directorimage: new FormControl(null),
      directormail: new FormControl(null, [Validators.required, Validators.pattern(this._emailPattern)]),
      directormobilenumber: new FormControl(null, [Validators.required, Validators.pattern('[0-9 ]{10}')]),
      schoolaltermobilenumber: new FormControl(null, [Validators.required, Validators.pattern('[0-9 ]{10}')]),
      agentname: new FormControl(null, Validators.required),
      requestdate: new FormControl(null, Validators.required),
      firstlevelacceptance: new FormControl(null),
      secondlevelacceptance: new FormControl(null),
    });

  }


  /**
   * @description convenience getter for easy access to form fields
   * @readonly
   * @memberof  StudentAdmissionComponent
   */
  get f() { return this.admissionForm.controls; }

  /**
   * @description Mthod to convert img object in 64 bit string and preview images
   * @author Virendra Pandey
   * @date 2020-10-18
   * @param {*} event
   * @param {*} imageType
   * @memberof RegistrationComponent
   */
  public onFileChange(event, imageType) {

    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const file = (event.target as HTMLInputElement).files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (imageType === 'icon') {
          this.imageSrc = reader.result as string;
          this.admissionForm.patchValue({
            schoolicon: this.imageSrc.substring(22) // this.urlBase64ToUint8Array(reader.result)
          });
        } else if (imageType === 'banner') {
          this.imageSrc1 = reader.result as string;
          this.admissionForm.patchValue({
            schoolbanner: this.imageSrc1.substring(22) // this.urlBase64ToUint8Array(reader.result)
          });
        } else if (imageType === 'director') {
          this.imageSrc2 = reader.result as string;
          this.admissionForm.patchValue({
            directorimage: this.imageSrc2.substring(22) // this.urlBase64ToUint8Array(reader.result)
          });
        }
      };

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
    this.submitted = true;
    console.log('this.admissionForm.value', this.admissionForm.value);

    if (this.admissionForm.value) {
      this.admissionForm.value.startdate = this._date.transform(this.admissionForm.value.startdate, 'MM/dd/yyyy');
      this.admissionForm.value.enddate = this._date.transform(this.admissionForm.value.enddate, 'MM/dd/yyyy');
      this.admissionForm.value.requestdate = this._date.transform(this.admissionForm.value.requestdate, 'MM/dd/yyyy');
    }

    // stop here if form is invalid
    if (this.admissionForm.invalid) {
      return;
    }

    let payload = {};
    Object.assign(payload, this.admissionForm.value);
    this.loading = true;
    this._ss.register(payload).subscribe(data => {
      this.showNotification('Submitted Successfully!!');
      this.admissionForm.reset();
      this.imageSrc = "";
      this.imageSrc1 = "";
      this.imageSrc2 = "";
      this.showForm = false;
      setTimeout(() => {
        this.showForm = true;
      }, 0);
    },
      error => {
        this.error = error;
        this.loading = false;
        console.error(this.error);
      });
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
}
