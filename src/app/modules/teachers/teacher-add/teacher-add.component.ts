import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatChipInputEvent } from '@angular/material/chips';
import { TeachersService } from '../../../_services/teachers.service';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.scss'],
  providers: [DatePipe]
})

export class TeacherAddComponent implements OnInit {

  // Component properties variable declaration
  @Input() teacherDetails: any;
  @Output() formCancel: EventEmitter<any> = new EventEmitter<any>();
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();

  // VAriable declaration
  public teacherForm: FormGroup;
  public loading: boolean = false;
  public submitted: boolean = false;
  public returnUrl: string;
  public error: string = '';
  public cardTitle: string = 'Add New teachers';
  public showButtons: boolean = false;
  public showForm: boolean = true;
  public buttonLabel: string = 'Submit';
  private _phonePattern = '^[0-9-+s()]*$';
  private _emailPattern = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
  public horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  public verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  //Chips variable declaration
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  // qualifications: any[] = [];

  constructor(
    private _ar: ActivatedRoute,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _ts: TeachersService,
    private _date: DatePipe
  ) { }

  ngOnInit(): void {
    this.teacherForm = new FormGroup({

      //Requird Fields
      // id: new FormControl(null, Validators.required),
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      dob: new FormControl(null, Validators.required),
      sex: new FormControl(null, Validators.required),
      cast: new FormControl(null, Validators.required),
      religion: new FormControl(null, Validators.required),
      previousexp: new FormControl(null),
      previouswrkaddress: new FormControl(null),
      positionapplied: new FormControl(null),

      dateofjoin: new FormControl(null, Validators.required),
      worktimings: new FormControl(null),
      transport: new FormControl(null),
      grosssalary: new FormControl(null),
      pfnumber: new FormControl(null),
      esinumber: new FormControl(null),
      netsalary: new FormControl(null),

      PF: new FormControl(null),
      ESI: new FormControl(null),

      adharnumber: new FormControl(null, Validators.minLength(12)),
      bloodgroup: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.pattern(this._emailPattern)]),
      mobilenumber: new FormControl(null, [Validators.required, Validators.minLength(10)]),
      whatsappnumber: new FormControl(null),

    });
    console.log('teacherDetails', this.teacherDetails);
    if (this.teacherDetails && this.teacherDetails[0].id) {
      this.cardTitle = 'Update teacher Record';
      this.buttonLabel = 'Update';
      this.showButtons = true;
    }

    //adding fields if position applied for teacher
    this.teacherForm.controls['positionapplied'].valueChanges.subscribe(positionApplied => {
      if (positionApplied) {
        this.teacherForm.addControl('qualification', new FormControl([]));
        this.teacherForm.addControl('subjects', new FormControl([]));
        this.teacherForm.addControl('assignedclass', new FormControl([]));
        this.teacherForm.addControl('assignedsubject', new FormControl([]));
      } else {
        this.teacherForm.removeControl('qualification');
        this.teacherForm.removeControl('subjects');
        this.teacherForm.removeControl('assignedclass');
        this.teacherForm.removeControl('assignedsubject');
      }
    });

    // method to set data in form
    this.setDataToForm();
  }


  /**
   * @description convenience getter for easy access to form fields
   * @readonly
   * @memberof  TeacherAddComponent
   */
  get f() { return this.teacherForm.controls; }

  /**
   * @description Method to set data in form
   * @author Virendra Pandey
   * @date 2020-06-27
   * @memberof TeacherAddComponent
   */
  public setDataToForm(): void {
    if (this.teacherDetails) {
      this.teacherForm.patchValue(this.teacherDetails[0]);
    }
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-11
   * @param {MatChipInputEvent} event
   * @param {*} controls
   * @memberof TeacherAddComponent
   */
  addChips(event: MatChipInputEvent, controls): void {
    const input = event.input;
    const value = event.value;
    console.log('value', value);
    // Add our fruit
    if ((value || '').trim()) {
      if (controls === 'ql') {
        this.f.qualification.setValue([...this.f.qualification.value, value.trim()]);
        this.f.qualification.updateValueAndValidity();
      } else if (controls === 'sb') {
        this.f.subjects.setValue([...this.f.subjects.value, value.trim()]);
        this.f.subjects.updateValueAndValidity();
      } else if (controls === 'ac') {
        this.f.assignedclass.setValue([...this.f.assignedclass.value, value.trim()]);
        this.f.assignedclass.updateValueAndValidity();
      } else if (controls === 'as') {
        this.f.assignedsubject.setValue([...this.f.assignedsubject.value, value.trim()]);
        this.f.assignedsubject.updateValueAndValidity();
      }
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-11
   * @param {*} ql
   * @memberof TeacherAddComponent
   */
  removeChips(chipsLabel, controls): void {
    if (controls === 'ql') {
      const index = this.f.qualification.value.indexOf(chipsLabel);

      if (index >= 0) {
        this.f.qualification.value.splice(index, 1);
        this.f.qualification.updateValueAndValidity();
      }
    } else if (controls === 'sb') {
      const index = this.f.subjects.value.indexOf(chipsLabel);

      if (index >= 0) {
        this.f.subjects.value.splice(index, 1);
        this.f.subjects.updateValueAndValidity();
      }
    } else if (controls === 'ac') {
      const index = this.f.assignedclass.value.indexOf(chipsLabel);

      if (index >= 0) {
        this.f.assignedclass.value.splice(index, 1);
        this.f.assignedclass.updateValueAndValidity();
      }
    } else if (controls === 'as') {
      const index = this.f.assignedsubject.value.indexOf(chipsLabel);

      if (index >= 0) {
        this.f.assignedsubject.value.splice(index, 1);
        this.f.assignedsubject.updateValueAndValidity();
      }
    }
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-06-24
   * @returns undefined
   * @memberof TeacherAddComponent
   */
  public onSubmit() {
    this.submitted = true;
    console.log('this.teacherForm.value', this.teacherForm.value);
    // console.log('this.teacherForm.invalid', this.teacherForm.invalid);
    if (this.teacherForm.value) {
      // this.teacherForm.value.Class = parseInt(this.teacherForm.value.Class, 10);
      this.teacherForm.value.dob = this._date.transform(this.teacherForm.value.dob, 'MM/dd/yyyy');
      this.teacherForm.value.dateofjoin = this._date.transform(this.teacherForm.value.dateofjoin, 'MM/dd/yyyy');

      this.teacherForm.value.qualification = this.teacherForm.value.qualification && this.teacherForm.value.qualification.length ? this.teacherForm.value.qualification.toString() : null;
      this.teacherForm.value.subjects = this.teacherForm.value.subjects && this.teacherForm.value.subjects.length ? this.teacherForm.value.subjects.toString() : null;
      this.teacherForm.value.assignedclass = this.teacherForm.value.assignedclass && this.teacherForm.value.assignedclass.length ? this.teacherForm.value.assignedclass.toString() : null;
      this.teacherForm.value.assignedsubject = this.teacherForm.value.assignedsubject && this.teacherForm.value.assignedsubject.length ? this.teacherForm.value.assignedsubject.toString() : null;
    }

    // console.log('this.teacherForm.value.dateofteacher', this.teacherForm.value.dateofteacher);
    // stop here if form is invalid
    if (this.teacherForm.invalid) {
      return;
    }

    let payload = {};
    Object.assign(payload, this.teacherForm.value);

    this.loading = true;
    if (this.teacherDetails && this.teacherDetails[0].id) {
      payload['id'] = this.teacherDetails[0].id;
      console.log('teacherDetails.id', this.teacherDetails.id);
      this._ts.updateTeacher(this.teacherDetails[0].id, payload).subscribe(data => {
        this.formSubmit.emit(true);
        this.showNotification('Updated Successfully!!');
        if (this.teacherForm) {
          this.teacherForm.reset();
        }
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
    } else {
      this._ts.postTeacher(payload).subscribe(data => {
        console.log('data', data);
        this.showNotification('Submitted Successfully!!');
        if (this.teacherForm) {
          this.teacherForm.reset();
        }
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
   * @memberof TeacherAddComponent
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
   * @memberof TeacherAddComponent
   */
  public onFormReset(event: Event): void {
    if (event && this.teacherForm) {
      this.teacherForm.reset();
    }
  }

  /**
   * @description Method to cancel form
   * @author Virendra Pandey
   * @date 2020-06-25
   * @memberof TeacherAddComponent
   */
  public onCancel(event: Event): void {
    if (event) {
      this.formCancel.emit(true);
    }
  }
}
