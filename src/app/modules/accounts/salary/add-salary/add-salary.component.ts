import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MatChipInputEvent } from '@angular/material/chips';
import { SalaryService } from '../../../../_services/salary.service';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-add-salary',
  templateUrl: './add-salary.component.html',
  styleUrls: ['./add-salary.component.scss'],
  providers: [DatePipe]
})

export class AddSalaryComponent implements OnInit {

  // Component properties variable declaration
  @Input() salaryDetails: any;
  @Output() formCancel: EventEmitter<any> = new EventEmitter<any>();
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();

  // VAriable declaration
  public salaryForm: FormGroup;
  public loading: boolean = false;
  public submitted: boolean = false;
  public ShowList: boolean = false;
  public returnUrl: string;
  public error: string = '';
  public cardTitle: string = 'Add/Update salary';
  public showButtons: boolean = false;
  public showForm: boolean = true;
  public buttonLabel: string = 'Submit';
  public paramID: number;
  public salaryRecord: any;
  public salaryList: any = [];
  public teacherName: FormControl = new FormControl();
  public teacherRecordList: any = [];
  public teacherFilteredList: Observable<any[]>;
  private _phonePattern = '^[0-9-+s()]*$';
  private _emailPattern = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}';
  public horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  public verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  public teacherID:any;

  //Chips variable declaration
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  // qualifications: any[] = [];
  public salarytypesList: any = []

  constructor(
    private _ar: ActivatedRoute,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _fs: SalaryService,
    private _date: DatePipe
  ) {
    /* this._ar.paramMap.subscribe(params => {
      console.log('params', params);
      if (params) {
        this.paramID = params['params'].id;
      }
    }); */
  }

  ngOnInit(): void {
    this.salaryForm = new FormGroup({

      //Requird Fields
      name: new FormControl(null, Validators.required),
      grosssalary: new FormControl(null, Validators.required),
      netsalary: new FormControl(null, Validators.required),
      absentdays: new FormControl(new Date(), Validators.required),
      salarytype: new FormControl(new Date(), Validators.required),

      paydate: new FormControl(new Date(''), Validators.required),
      payamount: new FormControl(null),
      PF: new FormControl(null),
      PFamount: new FormControl(null),
      ESI: new FormControl(null),
      ESIamount: new FormControl(null),

      salaryafterded: new FormControl(null),
      status: new FormControl(null),
      pendingamount: new FormControl(null),
      description: new FormControl(null),
    });

    //Method Call
    // this.getAllSalaryList();
    // this.getSalaryDetails();
    this.getSalaryTypes();
    this.getTeacherRecord()
  }


  /**
   * @description convenience getter for easy access to form fields
   * @readonly
   * @memberof  AddSalaryComponent
   */
  get f() { return this.salaryForm.controls; }

  /**
 * @description
 * @author Virendra Pandey
 * @date 2020-07-21
 * @memberof AddSalaryComponent
 */
  public getSalaryTypes() {
    this._fs.getSalryType().subscribe(data => {
      if (data) {
        this.salarytypesList = data;
      }
    });
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-26
   * @memberof AddSalaryComponent
   */
  public getSalaryDetails(): void {
    let id = this.teacherID ? this.teacherID : 1;
    this._fs.getSalaryDetails(id).subscribe(data => {
      if (data) {
        this.salaryForm.patchValue(data[0]);
      }
    })
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-26
   * @memberof AddSalaryComponent
   */
  public getAllSalaryList(): void {
    let id = this.teacherID ? this.teacherID : 1;
    this._fs.getAllSalaryDetails(id).subscribe(data => {
      if (data) {
        this.salaryList = data;
        console.log('this.SalaryList', this.salaryList);
        this.ShowList = true;
      }
    })
  }

  getOptionText(option) {
    if(option){
      return option.name;
    }
  }

  public getTeacherRecord(): void{
    this._fs.searchTeacher().subscribe(data=>{
      this.teacherRecordList = data;
      this.teacherFilteredList = this.teacherName.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    })
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
  return this.teacherRecordList.filter(option => option.name.toLowerCase().includes(filterValue)
  );
}

onOptionSelection(event){
  this.teacherID = event.option.value.id;
  if(this.teacherID) {
    this.getSalaryDetails();
    this.getAllSalaryList();
  }
}

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-08-02
   * @param {*} event
   * @memberof AddSalaryComponent
   */
  public onEditRecord(event: any): void {
    if (event) {
      this.salaryRecord = event;
      this.salaryForm.patchValue(event);
      this.buttonLabel = 'Update';
    }
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-06-24
   * @returns undefined
   * @memberof AddSalaryComponent
   */
  public onSubmit() {
    this.submitted = true;
    if (this.salaryForm.value) {
      this.salaryForm.value.paydate = this._date.transform(this.salaryForm.value.paydate, 'MM/dd/yyyy');
    }

    // console.log('this.salaryForm.value.dateofsalary', this.salaryForm.value.dateofsalary);
    // stop here if form is invalid
    if (this.salaryForm.invalid) {
      return;
    }

    let payload = {};
    Object.assign(payload, this.salaryForm.value);

    this.loading = true;
    if (this.salaryRecord && this.salaryRecord.id) {
      payload['id'] = this.salaryRecord.id;
      payload['teacherid'] = this.salaryRecord.id;
      this._fs.updateSalary(this.salaryRecord.id, payload).subscribe(data => {
        this.showNotification('Updated Successfully!!');
        if (this.salaryForm) {
          this.salaryForm.reset();
        }

        this.showForm = false;
        setTimeout(() => {
          this.showForm = true;
        }, 50);

        this.getAllSalaryList();
        // this._router.navigate([this.returnUrl]);
      },
        error => {
          this.error = error;
          this.loading = false;
          console.error(this.error);
        });
    } else {
      this._fs.saveSalary(payload).subscribe(data => {
        this.showNotification('Submitted Successfully!!');
        if (this.salaryForm) {
          this.salaryForm.reset();
        }
        // this._router.navigate([this.returnUrl]);
        this.showForm = false;
        setTimeout(() => {
          this.showForm = true;
        }, 50);
        this.getAllSalaryList();
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
   * @memberof AddSalaryComponent
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
   * @memberof AddSalaryComponent
   */
  public onFormReset(event: Event): void {
    if (event && this.salaryForm) {
      this.salaryForm.reset();
    }
  }

  /**
   * @description Method to cancel form
   * @author Virendra Pandey
   * @date 2020-06-25
   * @memberof AddSalaryComponent
   */
  public onCancel(event: Event): void {
    if (event) {
      this.formCancel.emit(true);
    }
  }
  /**
   * @description Method to cancel form
   * @author Virendra Pandey
   * @date 2020-06-25
   * @memberof AddSalaryComponent
   */
  public onDeleteSalary(event): void {
    if (event) {
       this.getAllSalaryList();
    }
  }

}
