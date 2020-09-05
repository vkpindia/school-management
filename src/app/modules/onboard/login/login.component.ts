import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { AuthenticationService } from '../../../_services';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../../_services/authentication.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
// import { AuthenticationService } from 'src/app/_services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  /*   public form = new FormGroup({
      email: new FormControl(),
      pass: new FormControl()
    }); */

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar,
    private authenticationService: AuthenticationService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      Userid: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.required),
      rememberMe: new FormControl(''),
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  /**
   * @description convenience getter for easy access to form fields
   * @readonly
   * @memberof LoginComponent
   */
  get f() { return this.loginForm.controls; }

  public onSubmit() {
    console.log('onSubmit');
    this.submitted = true;
    // this.router.navigate([this.returnUrl]);
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    // console.log('this.loginForm.value.username', this.loginForm.value.username);
    this.loading = true;
    delete this.loginForm.value.rememberMe;
    this.authenticationService.login(this.loginForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.showNotification();
          console.log('this.returnUrl', this.returnUrl);
          if (data && data.firsttime) {
            this.router.navigate(['/login/change-password']);
          } else {
            this.router.navigate([this.returnUrl]);
          }
        },
        error => {
          this.error = error;
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
    this._snackBar.open('Login Successfully!!', '', {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: ['success-snackbar']
    });
  }
}
