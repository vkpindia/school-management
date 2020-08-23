import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBarVerticalPosition, MatSnackBarHorizontalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { EventNotificationService } from '../../../_services/event-notification.service';

@Component({
  selector: 'app-events-add',
  templateUrl: './events-add.component.html',
  styleUrls: ['./events-add.component.scss'],
  providers: [DatePipe]
})
export class EventsAddComponent implements OnInit {

  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();
  // VAriable declaration
  public eventsForm: FormGroup;
  public loading: boolean = false;
  public submitted: boolean = false;
  public returnUrl: string;
  public error: string = '';
  public cardTitle: string = 'Add New Students';
  public showButtons: boolean = false;
  public buttonLabel: string = 'Submit';
  public showForm: boolean = true;
  public horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  public verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private _ar: ActivatedRoute,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _ens: EventNotificationService,
    private _date: DatePipe
  ) { }

  ngOnInit(): void {
    this.eventsForm = new FormGroup({

      //Requird Fieldss
      // id: new FormControl(0, Validators.required),
      name: new FormControl(null, Validators.required),
      startdate: new FormControl(null, Validators.required),
      enddate: new FormControl(null, Validators.required),
      noticegroup: new FormControl(null),
      description: new FormControl(null, Validators.required)
    });
  }


  /**
   * @description convenience getter for easy access to form fields
   * @readonly
   * @memberof  EventsComponent
   */
  get f() { return this.eventsForm.controls; }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-06-24
   * @returns undefined
   * @memberof EventsComponent
   */
  public onSubmit() {
    this.submitted = true;

    if (this.eventsForm.value) {
      this.eventsForm.value.startdate = this._date.transform(this.eventsForm.value.startdate, 'MM/dd/yyyy h:mm a');
      this.eventsForm.value.enddate = this._date.transform(this.eventsForm.value.enddate, 'MM/dd/yyyy h:mm a');
    }

    // stop here if form is invalid
    if (this.eventsForm.invalid) {
      return;
    }

    let payload = {};
    Object.assign(payload, this.eventsForm.value);
    payload['isevent'] = true;

    this.loading = true;
    this._ens.postRecord(payload).subscribe(data => {
      this.showNotification('Submitted Successfully!!');
      this.formSubmit.emit(true);
      this.eventsForm.reset();
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
   * @memberof EventsComponent
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
   * @memberof EventsComponent
   */
  public onFormReset(event: Event): void {
    if (event && this.eventsForm) {
      this.eventsForm.reset();
    }
  }
}
