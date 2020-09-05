import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyErrorStateMatcher, passwordMatchValidator } from '../../error-matcher';
import { AuthenticationService } from '../../../_services/authentication.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  public resetPasswordForm: FormGroup;
  public submitted: boolean = false;
  public loading: boolean;

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  public userData: any = {};

  public emailPattern: string = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';


  constructor(private _aus: AuthenticationService
    , private _router: Router
    , private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.resetPasswordForm = new FormGroup({
      oldpassword: new FormControl('', [Validators.required, Validators.minLength(6)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      cnfPassword: new FormControl('', passwordMatchValidator)
    });

    this._aus.getUserdata().subscribe(data => {
      this.userData = data
    })
  }
  get f() { return this.resetPasswordForm.controls; }


  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-09-05
   * @returns
   * @memberof ChangePasswordComponent
   */
  public onChangePassword() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.resetPasswordForm.invalid) {
      return;
    }

    console.log('userData', this.userData);
    let payload: any = {};
    Object.assign(payload, this.resetPasswordForm.value)
    payload = { ...payload, ...this.userData };
    delete payload.Roll;
    delete payload.Status;
    delete payload.Message;
    this.loading = true;
    payload['firsttime'] = false;
    this._aus.resetPassword(payload)
      .pipe(first())
      .subscribe(
        data => {
          if (data) {
            this.showNotification();
            this._router.navigate(['login']);
          }
        },
        error => {
          console.error(error);
          this.loading = false;
        });
  }

  /**
 * @description
 * @author Virendra Pandey
 * @date 2020-06-18
 * @memberof LoginComponent
 */
  public showNotification(): void {
    this._snackBar.open('Password Changed Successfully!!', '', {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['success-snackbar']
    });
  }
}
