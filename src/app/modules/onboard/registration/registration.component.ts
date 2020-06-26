import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public registrationForm: FormGroup;
  public submitted: boolean = false;
  public emailPattern: string = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
  constructor() { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      username: new FormControl('', Validators.required),
      useremail: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      pass: new FormControl('', Validators.required),
      confirmPass: new FormControl('', Validators.required),
      accept: new FormControl('', Validators.required),
    });
  }
  get f() { return this.registrationForm.controls; }

  public onRegister() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registrationForm.invalid) {
      return;
    }

    /* this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.pass.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        }); */
  }
}
