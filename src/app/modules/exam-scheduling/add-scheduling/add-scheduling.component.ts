import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ThemePalette } from '@angular/material/core';
import { ExamSchedulingService } from '../../../_services/exam-scheduling.service';
import { AuthenticationService } from '../../../_services/authentication.service';

@Component({
  selector: 'app-add-scheduling',
  templateUrl: './add-scheduling.component.html',
  styleUrls: ['./add-scheduling.component.scss'],
  providers: [DatePipe]
})
export class AddSchedulingComponent implements OnInit {

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
  public showForm: boolean = true;
  public classList: any = [];
  public sectionList: any = [];
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
  public userData: any = {};

  constructor(
    private _ar: ActivatedRoute,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _ens: ExamSchedulingService,
    private _date: DatePipe,
    private _authServece: AuthenticationService
  ) { }

  ngOnInit(): void {
    this._authServece.currentUser.subscribe(user => {
      if (user) {
        this.userData = user;
      }
    });

    this.notificationForm = new FormGroup({

      //Requird Fields
      // id: new FormControl(0, Validators.required),
      classid: new FormControl(null, Validators.required),
      sectionid: new FormControl(null, Validators.required),
      examname: new FormControl(null, Validators.required),
      teachername: new FormControl({ value: this.userData.username, disabled: true }, Validators.required),
      startdate: new FormControl(null, Validators.required),
      enddate: new FormControl(null, Validators.required),
      examdescription: new FormControl(null, Validators.required)
    });

    this.getClassSection();
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
   * @date 2020-07-21
   * @memberof AddfeeComponent
   */
  public getClassSection() {
    // this.showForm = false;
    this._ens.getClassSection().subscribe(data => {
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
  public onClassChange(event): void {
    if (event) {
      this._ens.getSections(event.value).subscribe(section => {
        if (section) {
          this.sectionList = section;
        }
      })
    }
  }

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
      this.notificationForm.value.classid = parseInt(this.notificationForm.value.classid);
      this.notificationForm.value.sectionid = parseInt(this.notificationForm.value.sectionid);
      this.notificationForm.value.startdate = this._date.transform(this.notificationForm.value.startdate, 'MM/dd/yyyy h:mm a');
      this.notificationForm.value.enddate = this._date.transform(this.notificationForm.value.enddate, 'MM/dd/yyyy h:mm a');
    }

    if (this.notificationForm.invalid) {
      return;
    }

    let payload = {};
    Object.assign(payload, this.notificationForm.value);
    payload['isevent'] = false;
    payload['teacherid'] = this.userData.id;
    payload['teachername'] = this.userData.username;

    this.loading = true;
    this._ens.scheduleExam(payload).subscribe(data => {
      this.showNotification('Submitted Successfully!!');
      this.formSubmit.emit({isScheduled: true});
      this.notificationForm.reset();
      this.showForm = false;
      setTimeout(() => {
        this.showForm = true;
      }, 50);
      // this._router.navigate([this.returnUrl]);
      this.f.teachername.patchValue(this.userData.username);
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
