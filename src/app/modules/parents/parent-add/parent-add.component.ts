import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ParentsService } from '../../../_services/parents.service';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';
import { FeesService } from '../../../_services/fees.service';

@Component({
  selector: 'app-parent-add',
  templateUrl: './parent-add.component.html',
  styleUrls: ['./parent-add.component.scss']
})

export class ParentAddComponent implements OnInit {

  // Component properties variable declaration
  @Input() parentDetails: any;
  @Output() formCancel: EventEmitter<any> = new EventEmitter<any>();
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();

  // VAriable declaration
  public parentForm: FormGroup;
  public studentRecordList: any = [];
  public studentFilteredList: Observable<any[]>;
  public classList: any = [];
  public sectionList: any = [];
  public studentList: any = [];
  public classID: FormControl = new FormControl();
  public sectionID: FormControl = new FormControl();
  public studentID: number;
  public studentName: FormControl = new FormControl();
  public loading: boolean = false;
  public submitted: boolean = false;
  public returnUrl: string;
  public error: string = '';
  public cardTitle: string = 'Add New Parents';
  public showButtons: boolean = false;
  public showForm: boolean = true;
  public buttonLabel: string = 'Next';
  public paramID: any;
  private _phonePattern = '^[0-9-+s()]*$';
  private _emailPattern = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';

  public horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  public verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private _ar: ActivatedRoute,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _ss: ParentsService,
    private _fs: FeesService
  ) {
    this._ar.queryParamMap.subscribe(params => {
      this.paramID = params['params'].id;
    });
  }

  ngOnInit(): void {

    this.parentForm = new FormGroup({

      // Requird Fields
      // father details
      father_guardian_firstname: new FormControl(null, Validators.required),
      familyname: new FormControl(null, Validators.required),
      father_guardian_adharnumber: new FormControl(null, [Validators.required, Validators.pattern('[0-9 ]{12}')]),
      father_guardian_qualification: new FormControl(null, Validators.required),
      father_guardian_occupation: new FormControl(null, Validators.required),
      father_guardian_mobilenumber: new FormControl(null, [Validators.required, Validators.pattern('[0-9 ]{10}')]),
      email: new FormControl(null, [Validators.required, Validators.pattern(this._emailPattern)]),

      // Mother fields
      mother_firstname: new FormControl(null, Validators.required),
      mother_aadharnumber: new FormControl(null, [Validators.required, Validators.pattern('[0-9 ]{12}')]),
      mother_qualification: new FormControl(null, Validators.required),
      mother_occupation: new FormControl(null, Validators.required),
      mother_phonenumber: new FormControl(null, [Validators.required, Validators.pattern('[0-9 ]{10}')]),

      // Optional Fields
      bank_accountnumber: new FormControl(null),
      bank_ifsccode: new FormControl(null),
      bank_addressbranch: new FormControl(null),
      bank_accountname: new FormControl(null),
      rationcardnumber: new FormControl(null),
      annualIncome: new FormControl(null),
      mothertoung: new FormControl(null),
      nationality: new FormControl(null),
      bloodgroup: new FormControl(null),
      whatsappnumber: new FormControl(null, Validators.pattern('[0-9 ]{10}'))
    });

    if (this.parentDetails && this.parentDetails.id) {
      this.cardTitle = 'Update Parent Record';
      this.buttonLabel = 'Update';
      this.showButtons = true;
    }

    // method to set data in form
    this.getClassSection();
    this.setDataToForm();
  }


  /**
   * @description convenience getter for easy access to form fields
   * @readonly
   * @memberof  ParentAddComponent
   */
  get f() { return this.parentForm.controls; }

  /**
   * @description Method to set data in form
   * @author Virendra Pandey
   * @date 2020-06-27
   * @memberof ParentAddComponent
   */
  public setDataToForm(): void {
    if (this.parentDetails) {
      this.parentForm.patchValue(this.parentDetails);
    }
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
        console.log('this.studentList', this.studentList);
        // this.ShowList = true;
      }
    });
  }

  onOptionSelection(event) {
    this.studentID = event.option.value.id;
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
   * @date 2020-06-24
   * @returns undefined
   * @memberof ParentAddComponent
   */
  public onSubmit() {
    console.log('onSubmit');
    this.submitted = true;
    // console.log('this.parentForm.value', this.parentForm.value);
    if (this.parentForm.invalid) {
      return;
    }

    let payload = {};
    Object.assign(payload, this.parentForm.value);

    this.loading = true;
    if (this.parentDetails && this.parentDetails.id) {
      payload['id'] = this.parentDetails.id;
      payload['studentid'] = this.parentDetails.studentid;
      console.log('studentDetails.id', this.parentDetails.id);
      this._ss.updateparent(this.parentDetails.id, payload).subscribe(data => {
        this.formSubmit.emit(true);
        this.showNotification('Updated Successfully!!');
        this.parentForm.reset();
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
      let studentID = this.paramID ? parseInt(this.paramID, 10) : this.studentID;
      payload['studentid'] = studentID;
      console.log('payload', payload);
      this._ss.postParent(payload).subscribe(data => {
        this.showNotification('Submitted Successfully!!');
        this.parentForm.reset();
        this._router.navigate(['/fees'], { queryParams: { id: studentID } });
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
   * @memberof ParentAddComponent
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
   * @memberof ParentAddComponent
   */
  public onFormReset(event: Event): void {
    if (event && this.parentForm) {
      this.parentForm.reset();
    }
  }

  /**
   * @description Method to cancel form
   * @author Virendra Pandey
   * @date 2020-06-25
   * @memberof ParentAddComponent
   */
  public onCancel(event: Event): void {
    if (event) {
      this.formCancel.emit(true);
    }
  }
}
