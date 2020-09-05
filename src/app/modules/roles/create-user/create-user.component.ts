import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm, FormGroupDirective, ValidatorFn, ValidationErrors } from '@angular/forms';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../../_services/users.service';
import { DatePipe } from '@angular/common';
import { MyErrorStateMatcher, passwordMatchValidator } from '../../error-matcher';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
  providers: [DatePipe]
})

export class CreateUserComponent implements OnInit {

  // Component properties variable declaration
  @Input() userDetails: any;
  @Output() formCancel: EventEmitter<any> = new EventEmitter<any>();
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();

  public matcher = new MyErrorStateMatcher();

  // VAriable declaration
  public usersForm: FormGroup;
  public imageSrc: string;
  public loading: boolean = false;
  public submitted: boolean = false;
  public returnUrl: string;
  public error: string = '';
  public cardTitle: string = 'Add New User';
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
    private _us: UsersService,
    private _date: DatePipe
  ) { }

  ngOnInit(): void {
    this.usersForm = new FormGroup({

      //Requird Fields
      // id: new FormControl(0, Validators.required),
      username: new FormControl(null, Validators.required),
      userid: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
      cnfPassword: new FormControl(null, passwordMatchValidator),
      roleid: new FormControl(null, Validators.required),
      msg: new FormControl(null)
    });

/*     this.usersForm.valueChanges.subscribe(field => {
      // console.log('field', field);
      if (field.password !== field.cnfPassword) {
        this.f.cnfPassword.setErrors({ mismatch: true });
      } else {
        this.f.cnfPassword.setErrors(null);
        this.f.cnfPassword.updateValueAndValidity();
      }
    }); */

    console.log('userDetails', this.userDetails);
    if (this.userDetails && this.userDetails[0].id) {
      this.cardTitle = 'Update User Record';
      this.buttonLabel = 'Update';
      this.showButtons = true;
    }

    // method to set data in form
    this.setDataToForm();
  }

  /**
   * @description convenience getter for easy access to form fields
   * @readonly
   * @memberof  CreateUserComponent
   */
  get f() { return this.usersForm.controls; }


  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-09-05
   * @param {FormGroup} group
   * @returns
   * @memberof CreateUserComponent
   */
/*   checkPasswords(control: FormControl) { // here we have the 'passwords' group
    let pass = control.password.value;
    let confirmPass = control.cnfPassword.value;

    return pass === confirmPass ? null : { notSame: true }
  } */

  public confirmPassword(control: FormControl, group: FormGroup, matchPassword: string) {
    if (!control.value || group.controls[matchPassword].value !== null || group.controls[matchPassword].value === control.value) {
        return null;
    }
    return { 'mismatch': true }
}

  /**
   * @description Method to set data in form
   * @author Virendra Pandey
   * @date 2020-06-27
   * @memberof CreateUserComponent
   */
  public setDataToForm(): void {
    if (this.userDetails) {
      this.userDetails[0]['cnfPassword'] = this.userDetails[0].password;
      this.usersForm.patchValue(this.userDetails[0]);
    }
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-06-24
   * @returns undefined
   * @memberof CreateUserComponent
   */
  public onSubmit() {
    console.log('onSubmit');
    this.submitted = true;
    console.log('this.usersForm.value', this.usersForm.value);

    // console.log('this.usersForm.value.dateofadmission', this.usersForm.value.dateofadmission);
    // stop here if form is invalid
    if (this.usersForm.invalid) {
      return;
    }

    let payload = {};
    delete this.usersForm.value.cnfPassword
    Object.assign(payload, this.usersForm.value);
    delete payload['file'];
    this.loading = true;
    if (this.userDetails && this.userDetails[0].id) {
      payload['id'] = this.userDetails[0].id;
      console.log('userDetails.id', this.userDetails.id);
      this._us.updateUser(this.userDetails[0].id, payload).subscribe(data => {
        this.formSubmit.emit(true);
        this.showNotification('Updated Successfully!!');
        this.usersForm.reset();
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
      this._us.postSUser(payload).subscribe(data => {
        let paramID = data['id'];
        this.showNotification('Submitted Successfully!!');
        this.usersForm.reset();
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
  }

  /**
   * @description Method to show notification
   * @author Virendra Pandey
   * @date 2020-06-24
   * @memberof CreateUserComponent
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
   * @memberof CreateUserComponent
   */
  public onFormReset(event: Event): void {
    if (event && this.usersForm) {
      this.usersForm.reset();
    }
  }

  /**
   * @description Method to cancel form
   * @author Virendra Pandey
   * @date 2020-06-25
   * @memberof CreateUserComponent
   */
  public onCancel(event: Event): void {
    if (event) {
      this.formCancel.emit(true);
    }
  }
}
