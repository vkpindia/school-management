import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TermsService } from '../../../../_services/terms.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-term-add',
  templateUrl: './term-add.component.html',
  styleUrls: ['./term-add.component.scss'],
  providers: [DatePipe]
})
export class TermAddComponent implements OnInit {

  // Component properties variable declaration
  @Input() termDetails: any;
  @Output() formCancel: EventEmitter<any> = new EventEmitter<any>();
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();

  // VAriable declaration
  public termForm: FormGroup;
  public loading: boolean = false;
  public submitted: boolean = false;
  public returnUrl: string;
  public error: string = '';
  public cardTitle: string = 'Add New Term';
  public showButtons: boolean = false;
  public showForm: boolean = true;
  public buttonLabel: string = 'Submit';
  public termtypesList: any = [];
  public sectionList: any = [];
  public classList: any = [];
  public termList: any = [];
  public selectedType: string;
  private _phonePattern = '^[0-9-+s()]*$';
  private _emailPattern = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';

  public horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  public verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private _es: TermsService,
    private _ar: ActivatedRoute,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _date: DatePipe
  ) { }

  ngOnInit(): void {
    this.termForm = new FormGroup({

      //Requird Fields
      termname: new FormControl(null, Validators.required),
      termstartdate: new FormControl(null, Validators.required),
      termenddate: new FormControl(null, Validators.required),
      optional : new FormControl(null),
    });

    console.log('term details', this.termDetails);
    if (this.termDetails && this.termDetails.id) {
      this.cardTitle = 'Update term Record';
      this.buttonLabel = 'Update';
      this.showButtons = true;
    }

  }

  /**
   * @description convenience getter for easy access to form fields
   * @readonly
   * @memberof termAddComponent
   */
  get f() { return this.termForm.controls; }


  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-06-24
   * @returns undefined
   * @memberof termAddComponent
   */
  public onSubmit() {

    this.submitted = true;
    console.log('this.termForm.value', this.termForm.value);
    // console.log('this.termForm.invalid', this.termForm.invalid);
    if (this.termForm.value) {
      this.termForm.value.termstartdate = this._date.transform(this.termForm.value.termstartdate, 'MM/dd/yyyy');
      this.termForm.value.termenddate = this._date.transform(this.termForm.value.termenddate, 'MM/dd/yyyy');
    }

    // console.log('this.termForm.value.dateofterm', this.termForm.value.dateofterm);
    // stop here if form is invalid
    if (this.termForm.invalid) {
      return;
    }

    let payload = {};
    Object.assign(payload, this.termForm.value);

    this.loading = true;

      this._es.saveTerm(payload).subscribe(data => {
        this.formSubmit.emit(true);
        this.showNotification('Submitted Successfully!!');
        this.termForm.reset();
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
   * @memberof termAddComponent
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
   * @memberof termAddComponent
   */
  public onFormReset(event: Event): void {
    if (event && this.termForm) {
      this.termForm.reset();
    }
  }

  /**
   * @description Method to cancel form
   * @author Virendra Pandey
   * @date 2020-06-25
   * @memberof termAddComponent
   */
  public onCancel(event: Event): void {
    if (event) {
      this.formCancel.emit(true);
    }
  }

}
