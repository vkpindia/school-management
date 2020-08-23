import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TransportService } from '../../../_services/transport.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-create-transport',
  templateUrl: './create-transport.component.html',
  styleUrls: ['./create-transport.component.scss'],
  providers: [DatePipe]
})
export class CreateTransportComponent implements OnInit {

  // Component properties variable declaration
  @Input() transportDetails: any;
  @Output() formCancel: EventEmitter<any> = new EventEmitter<any>();
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();

  // VAriable declaration
  public transportationForm: FormGroup;
  public imageSrc: string;
  public loading: boolean = false;
  public submitted: boolean = false;
  public returnUrl: string;
  public error: string = '';
  public cardTitle: string = 'Add New transports';
  public showButtons: boolean = false;
  public showForm: boolean = true;
  public buttonLabel: string = 'Submit';
  public horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  public verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  public classList: any = [];
  public sectionList: any = [];

  constructor(
    private _ar: ActivatedRoute,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _ss: TransportService,
    private _date: DatePipe
  ) { }

  ngOnInit(): void {
    this.transportationForm = new FormGroup({

      //Requird Fields
      // id: new FormControl(0, Validators.required),
      routename: new FormControl(null, Validators.required),
      serial_number: new FormControl(null, Validators.required),
      rc_number: new FormControl(null, Validators.required),
      insurance_number: new FormControl(null, Validators.required),
      permit_number: new FormControl(null, Validators.required),
      fc_number: new FormControl(null, Validators.required),
      permit_startdate: new FormControl(null, Validators.required),
      permit_enddate: new FormControl(null, Validators.required),
      insurance_start: new FormControl(null, Validators.required),
      insurance_enddate: new FormControl(null, Validators.required),
      fc_start: new FormControl(null, Validators.required),
      fc_enddate: new FormControl(null, Validators.required),
      model: new FormControl(null, Validators.required),
      companyname: new FormControl(null, Validators.required),
      seatingcapacity: new FormControl(null, Validators.required),
      vehiclenumber: new FormControl(null, Validators.required),

      //Driver Deatils
      drivername: new FormControl(null, Validators.required),
      dob: new FormControl(null, Validators.required),
      dateofissue: new FormControl(null, Validators.required),
      dateofexpire: new FormControl(null, Validators.required),
      driving_liciense_numebr: new FormControl(null, Validators.required),
      driver_number: new FormControl(null, Validators.required),
      placeofissue: new FormControl(null, Validators.required),
      liciencetype: new FormControl(null, Validators.required),

      //Attender Fields
      attendername: new FormControl(null, Validators.required),
      attender_number: new FormControl(null, Validators.required),
      attenderdob: new FormControl(null, Validators.required)
    });

    console.log('transportDetails', this.transportDetails);
    if (this.transportDetails && this.transportDetails[0].id) {
      this.cardTitle = 'Update transport Record';
      this.buttonLabel = 'Update';
      this.showButtons = true;
    }

    // method to set data in form
    if (this.transportDetails) {
      this.setDataToForm();
    }
  }


  /**
   * @description convenience getter for easy access to form fields
   * @readonly
   * @memberof  transportAdmissionComponent
   */
  get f() { return this.transportationForm.controls; }

  /**
   * @description Method to set data in form
   * @author Virendra Pandey
   * @date 2020-06-27
   * @memberof transportAdmissionComponent
   */
  public setDataToForm(): void {
    if (this.transportDetails) {
      // this.transportDetails[0].Class = this.transportDetails[0].Class;
      this.transportationForm.patchValue(this.transportDetails[0]);
    }
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-06-24
   * @returns undefined
   * @memberof transportAdmissionComponent
   */
  public onSubmit() {
    console.log('onSubmit');
    this.submitted = true;
    console.log('this.transportationForm.value', this.transportationForm.value);
    // console.log('this.transportationForm.invalid', this.transportationForm.invalid);
    if (this.transportationForm.value) {

      this.transportationForm.value.permit_startdate = this._date.transform(this.transportationForm.value.permit_startdate, 'MM/dd/yyyy');
      this.transportationForm.value.permit_enddate = this._date.transform(this.transportationForm.value.permit_enddate, 'MM/dd/yyyy');

      this.transportationForm.value.insurance_start = this._date.transform(this.transportationForm.value.insurance_start, 'MM/dd/yyyy');
      this.transportationForm.value.insurance_enddate = this._date.transform(this.transportationForm.value.insurance_enddate, 'MM/dd/yyyy');
      this.transportationForm.value.fc_start = this._date.transform(this.transportationForm.value.fc_start, 'MM/dd/yyyy');
      this.transportationForm.value.fc_enddate = this._date.transform(this.transportationForm.value.fc_enddate, 'MM/dd/yyyy');

      this.transportationForm.value.dob = this._date.transform(this.transportationForm.value.dob, 'MM/dd/yyyy');
      this.transportationForm.value.dateofissue = this._date.transform(this.transportationForm.value.dateofissue, 'MM/dd/yyyy');
      this.transportationForm.value.dateofexpire = this._date.transform(this.transportationForm.value.dateofexpire, 'MM/dd/yyyy');
      this.transportationForm.value.attenderdob = this._date.transform(this.transportationForm.value.attenderdob, 'MM/dd/yyyy');
    }

    // console.log('this.transportationForm.value.dateofadmission', this.transportationForm.value.dateofadmission);
    // stop here if form is invalid
    if (this.transportationForm.invalid) {
      return;
    }

    let payload = {};
    Object.assign(payload, this.transportationForm.value);
    delete payload['file'];
    this.loading = true;
    if (this.transportDetails && this.transportDetails[0].id) {
      payload['id'] = this.transportDetails[0].id;
      console.log('transportDetails.id', this.transportDetails.id);
      this._ss.updateTransport(payload).subscribe(data => {
        this.formSubmit.emit(true);
        this.showNotification('Updated Successfully!!');
        this.transportationForm.reset();
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
      this._ss.saveTransport(payload).subscribe(data => {
        this.showNotification('Submitted Successfully!!');
        this.transportationForm.reset();
        this.showForm = false;
        setTimeout(() => {
          this.showForm = true;
        }, 50);
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
   * @memberof transportAdmissionComponent
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
   * @memberof transportAdmissionComponent
   */
  public onFormReset(event: Event): void {
    if (event && this.transportationForm) {
      this.transportationForm.reset();
    }
  }

  /**
   * @description Method to cancel form
   * @author Virendra Pandey
   * @date 2020-06-25
   * @memberof transportAdmissionComponent
   */
  public onCancel(event: Event): void {
    if (event) {
      this.formCancel.emit(true);
      this._router.navigate(['transport']);
    }
  }

}
