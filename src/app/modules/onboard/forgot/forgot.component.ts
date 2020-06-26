import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  public forgotForm: FormGroup;
  public emailPattern: string = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
  public submitted: boolean = false;
  constructor() { }

  ngOnInit(): void {
    this.forgotForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)])
    });
  }

  get f() {
    return this.forgotForm.controls;
  }

  public onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.forgotForm.invalid) {
      return;
    }

    /*  this.loading = true;
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
