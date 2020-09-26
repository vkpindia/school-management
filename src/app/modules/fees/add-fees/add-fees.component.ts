import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatChipInputEvent } from '@angular/material/chips';
import { FeesService } from '../../../_services/fees.service';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-add-fees',
  templateUrl: './add-fees.component.html',
  styleUrls: ['./add-fees.component.scss'],
  providers: [MatSnackBar, DatePipe]
})
export class AddFeesComponent implements OnInit {

  // Component properties variable declaration
  @Input() feesDetails: any;
  @Output() formCancel: EventEmitter<any> = new EventEmitter<any>();
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();

  // VAriable declaration
  public feesForm: FormGroup;
  public loading: boolean = false;
  public submitted: boolean = false;
  public ShowList: boolean = false;
  public returnUrl: string;
  public error: string = '';
  public cardTitle: string = 'Add/Update Fees';
  public showButtons: boolean = false;
  public buttonLabel: string = 'Submit';
  public paramID: number;
  public showForm: boolean = true;
  public feeRecord: any;
  public studentList: any = [];
  public studentRecordList: any = [];
  public studentFilteredList: Observable<any[]>;
  public classList: any = [];
  public sectionList: any = [];
  public classID: FormControl = new FormControl();
  public sectionID: FormControl = new FormControl();
  public studentName: FormControl = new FormControl();
  private _phonePattern = '^[0-9-+s()]*$';
  private _emailPattern = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
  public horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  public verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  //Chips variable declaration
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  public studentID: any;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  // qualifications: any[] = [];
  public feetypesList: any = []
  public termList: any = [];

  constructor(
    private _ar: ActivatedRoute,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _fs: FeesService,
    private _date: DatePipe
  ) {
    this._ar.queryParamMap.subscribe(params => {
      if (params) {
        this.paramID = params['params'].id;
      }
    });

  }

  ngOnInit(): void {

    this.feesForm = new FormGroup({

      //Requird Fields
      // id: new FormControl(null, Validators.required),
      studentName: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      feetype: new FormControl(null, Validators.required),
      termname: new FormControl(null, Validators.required),
      termstartdate: new FormControl(new Date(), Validators.required),
      termenddate: new FormControl(new Date(), Validators.required),
      feeamount: new FormControl(null),
      status: new FormControl(null),
      paidamount: new FormControl(null),

      discount: new FormControl(null),
      feeafterdiscount: new FormControl(null),
      description: new FormControl(null),
      paiddate: new FormControl(null)
    });

    //Method Call
    this.getClassSection();
    this.getfeetypes();
    this.getTerm();

    if (this.paramID) {
      this.getSetStudentFee();
    }
  }


  /**
   * @description convenience getter for easy access to form fields
   * @readonly
   * @memberof  feesAddComponent
   */
  get f() { return this.feesForm.controls; }


  public feeAfterDiscount() {
    this.feesForm.patchValue({
      feeafterdiscount: this.f.discount.value > 0 ? this.f.feeamount.value - this.f.discount.value : this.f.feeamount.value
      });
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-21
   * @memberof AddfeeComponent
   */
  public getfeetypes() {
    this._fs.getFeeType().subscribe(data => {
      if (data) {
        this.feetypesList = data;
      }
    });
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-21
   * @memberof AddfeeComponent
   */
  public getTerm() {
    this._fs.getTerms().subscribe(data => {
      if (data) {
        this.termList = data;
      }
    });
  }
  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-21
   * @memberof AddfeeComponent
   */
  public getStudentsRecord(): void {
    this._fs.getStudentRecord(this.classID.value, this.sectionID.value).subscribe(data => {
      if (data) {
        this.studentRecordList = data;
        this.studentFilteredList = this.studentName.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value))
        );
        // console.log('this.studentRecordList first', this.studentRecordList);
      }
    });
  }

  getOptionText(option) {
    if (option) {
      return option.name;
    }
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-08-12
   * @private
   * @param {string} value
   * @returns {string[]}
   * @memberof AddFeesComponent
   */
  private _filter(value): any[] {
    const filterValue = value;
    return this.studentRecordList.filter(option => option.name.toLowerCase().includes(filterValue)
    );
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-26
   * @memberof AddFeesComponent
   */
  public getSetStudent(): void {
    // let id =  this.studentName.value;
    this._fs.getStudentFee(this.studentID).subscribe(data => {
      if (data) {
        this.studentList = data;
        this.ShowList = true;
      }
    });
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-26
   * @memberof AddFeesComponent
   */
  public getSetStudentFee(): void {
    let id = this.paramID ? this.paramID : 1;
    this._fs.getFeeFirstTime(id).subscribe(data => {
      if (data) {
        this.onEditRecord(data[0]);
      }
    })
  }


  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-08-02
   * @param {*} event
   * @memberof AddFeesComponent
   */
  public onEditRecord(event: any): void {
    if (event) {
      this.feesDetails = event;
      this.feesForm.patchValue(event);
    }
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-21
   * @memberof AddfeeComponent
   */
  public getClassSection() {
    // this.showForm = false;
    this._fs.getClassSection().subscribe(data => {
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
      this._fs.getSections(event.value).subscribe(section => {
        if (section) {
          this.sectionList = section;
        }
      })
    }
  }


  /**
   * @description getting student record on section change
   * @author Virendra Pandey
   * @date 2020-08-12
   * @param {*} event
   * @memberof AddFeesComponent
   */
  public onSectionChange(event): void {
    if (event) {
      this.getStudentsRecord();
    }
  }

  onOptionSelection(event) {
    this.studentID = event.option.value.id;
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-06-24
   * @returns undefined
   * @memberof feesAddComponent
   */
  public onSubmit() {
    this.submitted = true;
    console.log('this.feesForm.value', this.feesForm.value);
    // console.log('this.feesForm.invalid', this.feesForm.invalid);
    if (this.feesForm.value) {
      // this.feesForm.value.Class = parseInt(this.feesForm.value.Class, 10);
      this.feesForm.value.termstartdate = this._date.transform(this.feesForm.value.termstartdate, 'MM/dd/yyyy');
      this.feesForm.value.termenddate = this._date.transform(this.feesForm.value.termenddate, 'MM/dd/yyyy');
      this.feesForm.value.paiddate = this._date.transform(this.feesForm.value.paiddate, 'MM/dd/yyyy');
    }

    // console.log('this.feesForm.value.dateoffees', this.feesForm.value.dateoffees);
    // stop here if form is invalid
    if (this.feesForm.invalid) {
      return;
    }

    let payload = {};
    Object.assign(payload, this.feesForm.value);

    this.loading = true;
    if (this.feesDetails && this.feesDetails.id) {
      payload['id'] = this.feesDetails.id;
      this._fs.updateFees(payload).subscribe(data => {
        console.log('data', data);
        this.showNotification('Submitted Successfully!!');
        if (this.feesForm) {
          this.feesForm.reset();
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
      this._fs.saveFees(payload).subscribe(data => {
        this.showNotification('Updated Successfully!!');
        if (this.feesForm) {
          this.feesForm.reset();
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
   * @memberof feesAddComponent
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
   * @memberof feesAddComponent
   */
  public onFormReset(event: Event): void {
    if (event && this.feesForm) {
      this.feesForm.reset();
    }
  }

  /**
   * @description Method to cancel form
   * @author Virendra Pandey
   * @date 2020-06-25
   * @memberof feesAddComponent
   */
  public onCancel(event: Event): void {
    if (event) {
      this.formCancel.emit(true);
    }
  }

  /**
   * @description Method to detele fees record
   * @author Virendra Pandey
   * @date 2020-06-25
   * @memberof feesAddComponent
   */
  public onDeleteRecord(event): void {
    let isDelete: boolean = confirm("Are sure you want to delete this fee record?");
    if (isDelete) {
      this._fs.deleteFees(event).subscribe(data => {
        if (data) {
          this.getSetStudent();
        }
      });
    }
  }
}
