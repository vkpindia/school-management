import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { EventNotificationService } from '../../../_services/event-notification.service';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-notification-add',
  templateUrl: './notification-add.component.html',
  styleUrls: ['./notification-add.component.scss'],
  providers: [DatePipe]
})
export class NotificationAddComponent implements OnInit {

  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();
  // VAriable declaration
  public notificationForm: FormGroup;
  public loading: boolean = false;
  public submitted: boolean = false;
  public returnUrl: string;
  public error: string = '';
  public cardTitle: string = 'Add New Students';
  public showButtons: boolean = false;
  public buttonLabel: string = 'Submit';
  public showForm:boolean = true;
  public horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  public verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  public disabled = false;
  public showSpinners = true;
  public showSeconds = false;
  public touchUi = false;
  public enableMeridian = false;
  public stepHour = 1;
  public stepMinute = 1;
  public stepSecond = 1;
  public color: ThemePalette = 'primary';

  constructor(
    private _ar: ActivatedRoute,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _ens: EventNotificationService,
    private _date: DatePipe
  ) { }

  ngOnInit(): void {
    this.notificationForm = new FormGroup({

      //Requird Fields
     // id: new FormControl(0, Validators.required),
     name: new FormControl(null, Validators.required),
     startdate: new FormControl(null, Validators.required),
     enddate: new FormControl(null, Validators.required),
     noticegroup: new FormControl(null),
     description: new FormControl(null)
    });

  }


  /**
   * @description convenience getter for easy access to form fields
   * @readonly
   * @memberof  StudentnotificationComponent
   */
  get f() { return this.notificationForm.controls; }


  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-06-24
   * @returns undefined
   * @memberof StudentnotificationComponent
   */
  public onSubmit() {

    this.submitted = true;

    if (this.notificationForm.value) {
      this.notificationForm.value.startdate = this._date.transform(this.notificationForm.value.startdate, 'MM/dd/yyyy h:mm a');
     this.notificationForm.value.enddate = this._date.transform(this.notificationForm.value.enddate, 'MM/dd/yyyy h:mm a');
    }

    if (this.notificationForm.invalid) {
      return;
    }

    let payload = {};
    Object.assign(payload, this.notificationForm.value);
    payload['isevent'] = false;

    this.loading = true;
    this._ens.postRecord(payload).subscribe(data => {
      this.showNotification('Submitted Successfully!!');
      this.formSubmit.emit(true);
      this.notificationForm.reset();
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

  /**
   * @description Method to show notification
   * @author Virendra Pandey
   * @date 2020-06-24
   * @memberof StudentnotificationComponent
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
   * @memberof StudentnotificationComponent
   */
  public onFormReset(event: Event): void {
    if (event && this.notificationForm) {
      this.notificationForm.reset();
    }
  }
}
