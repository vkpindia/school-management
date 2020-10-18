import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ResultService } from '../../../_services/result.service';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-add-result',
  templateUrl: './add-result.component.html',
  styleUrls: ['./add-result.component.scss'],
  providers: [DatePipe]
})
export class AddResultComponent implements OnInit {

  public examRecord: any;


  // Component properties variable declaration
  @Input() studentDetails: any;
  @Output() formCancel: EventEmitter<any> = new EventEmitter<any>();
  @Output() formSubmit: EventEmitter<any> = new EventEmitter<any>();

  // VAriable declaration
  public addResultForm: FormGroup;
  public addTResultForm: FormGroup;
  public studentid: any;
  public imageSrc: string;
  public loading: boolean = false;
  public submitted: boolean = false;
  public returnUrl: string;
  public error: string = '';
  public cardTitle: string = 'Add New Students';
  public showButtons: boolean = false;
  public showForm: boolean = true;
  public showTForm: boolean = true;
  public isResultReady: boolean = false;
  public buttonLabel: string = 'Next';
  public studentID: FormControl = new FormControl();
  public studentTID: FormControl = new FormControl();
  public horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  public verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  public selectedIndex: number;
  public classList: any = [];
  public sectionList: any = [];
  public controlIndex: any;
  public studentRecordList: any = [];

  public studentResultList: any = [];
  public studentFilteredList: Observable<any[]>;
  public studentTFilteredList: Observable<any[]>;
  public actualMark: number = 0;
  public mark: number = 0;
  public percent: number = 0;
  public currentIndex: number;

  constructor(private _route: ActivatedRoute,
    private _ar: ActivatedRoute,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private _ss: ResultService,
    private _date: DatePipe) {
    this._ar.queryParamMap.subscribe(data => {
      this.examRecord = data['params'];
      console.log(' this.examRecord', this.examRecord);
    })
  }

  ngOnInit(): void {

    /* this._ss.getExamRecord().subscribe(data => {
      this.examRecord = Object.assign({}, data);
    }); */
    this.addResultForm = new FormGroup({
      items: new FormArray([this.createFields()])
    });

    this.addTResultForm = new FormGroup({
      studentid: new FormControl(null, Validators.required),
      examid: new FormControl(this.examRecord.examid, Validators.required),
      actualtotal: new FormControl(null, Validators.required),
      totalmarks: new FormControl(null, Validators.required),
      grade: new FormControl(null, Validators.required),
      percetage: new FormControl(null, Validators.required),
      comments: new FormControl(null , Validators.required)
    });

    // Get total of actual and obtained mark
    this.addResultForm.valueChanges.subscribe(formData => {
      this.getTotalMarks(formData.items);
    });


    this.getStudentsRecord();
    if (this.examRecord && this.studentid) {
      this.getResult();
    }
  }

  /**
   * @description Method to get total
   * @author Virendra Pandey
   * @date 2020-08-21
   * @param {*} formData
   * @memberof AddResultComponent
   */
  public getTotalMarks(formData): void {
    let actualTotal: number = 0;
    let totalMark: number = 0;
    let percetage: number;
    formData.forEach(element => {
      actualTotal += element.actualmarks;
      totalMark += element.marks;
      percetage = (totalMark / actualTotal) * 100;
    });

    this.addTResultForm.get('actualtotal').setValue(actualTotal);
    this.addTResultForm.get('totalmarks').setValue(totalMark);
    this.addTResultForm.get('percetage').setValue(percetage);
  }
  /**
   * @description Form group
   * @author Virendra Pandey
   * @date 2020-08-21
   * @returns {FormGroup}
   * @memberof AddResultComponent
   */
  public createFields(): FormGroup {
    return new FormGroup({
      studentid: new FormControl(null, Validators.required),
      examid: new FormControl(this.examRecord.examid, Validators.required),
      subject: new FormControl(null, Validators.required),
      actualmarks: new FormControl(null, Validators.required),
      marks: new FormControl(null, Validators.required)
    });
  }

  /**
   * @description Method to add fields in form
   * @author Virendra Pandey
   * @date 2020-08-21
   * @memberof AddResultComponent
   */
  public addNextSubjectMark(): void {
    (this.f['items'] as FormArray).push(this.createFields());
    this.controlIndex++;
    if (this.studentid) {
      (this.addResultForm.get('items') as FormArray).at(this.controlIndex).get('studentid').patchValue(this.studentid);
    }
  }

  /**
   * @description convenience getter for easy access to form fields
   * @readonly
   * @memberof  StudentAdmissionComponent
   */
  get f() {
    return this.addResultForm.controls;
  }

  get fa() {
    return this.addResultForm.get('items') as FormArray;
  }

  /**
   * @description convenience getter for easy access to form fields
   * @readonly
   * @memberof  StudentAdmissionComponent
   */
  get ff() { return this.addTResultForm.controls; }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-21
   * @memberof AddfeeComponent
   */
  public getStudentsRecord(): void {
    this._ss.getStudentRecord(this.examRecord.classid, this.examRecord.sectionid).subscribe(data => {
      if (data) {
        this.studentRecordList = data;
        this.studentFilteredList = this.studentID.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value))
        );
        this.studentTFilteredList = this.studentTID.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value))
        );
        // console.log('this.studentRecordList first', this.studentRecordList);
      }
    });
  }

  /**
   * @description Method to set student name in studentid field
   * @author Virendra Pandey
   * @date 2020-08-21
   * @param {*} option
   * @returns
   * @memberof AddResultComponent
   */
  getOptionText(option) {
    if (option) {
      // this.studentTID.setValue(option.name);
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
   * @description method to set stuident ID in add result form
   * @author Virendra Pandey
   * @date 2020-08-21
   * @param {*} event to get id of student
   * @param {*} [rt] value to indentify the form
   * @param {*} [index] to get control index for addresult form
   * @memberof AddResultComponent
   */
  onOptionSelection(event, rt?: any, index?: any) {
    if (rt === 'ar') {
      this.studentid = event.option.value.id;
      this.controlIndex = index;
      this.addTResultForm.get('studentid').setValue(event.option.value.id);
      if (this.studentRecordList) {
        this.studentRecordList.map(data => {
          if (data.id === event.option.value.id) {
            this.studentTID.patchValue(data.name);
          }
        });
      }

      (this.addResultForm.get('items') as FormArray).at(index).get('studentid')
        .patchValue(event.option.value.id);
    } else {
      this.addTResultForm.patchValue({
        studentid: event.option.value.id
      });
    }
    this.getResult();
  }

  /**
   * @description Method to get student result
   * @author Virendra Pandey
   * @date 2020-08-21
   * @memberof AddResultComponent
   */
  public getResult() {
    this._ss.getExamResultByClassSection(this.studentid, this.examRecord.examid,
      this.examRecord.classid, this.examRecord.sectionid).subscribe(data => {
        if (data) {
          this.studentResultList = data;
          this.isResultReady = true;
        }
      });
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-06-24
   * @returns undefined
   * @memberof StudentAdmissionComponent
   */
  public onSubmit(form?: any) {
    if (form === 'addResult') {

      this.submitted = true;

      if (this.addResultForm.invalid) {
        return;
      }

      let payload = [];

      payload = this.addResultForm.value.items;
      // Object.assign(payload, this.addResultForm.value.items);
      this.loading = true;

      console.log('payload', payload);

      this._ss.saveResult(payload).subscribe(data => {
        this.showNotification('Submitted Successfully!!');
        this.selectedIndex = 1;

        this.addResultForm.reset();

        this.showForm = false;
        setTimeout(() => {
          this.showForm = true;
        }, 0);
        data.forEach((element, index) => {
          (this.addResultForm.get('items') as FormArray).at(index).get('examid').patchValue(element.examid);
        });
        this.getTotalMarks(data);
        this.getResult();
      },
        error => {
          this.error = error;
          this.loading = false;
          console.error(this.error);
        });
    } else {

      this.submitted = true;

      if (this.addTResultForm.invalid) {
        return;
      }

      this.addTResultForm.value.examid = parseInt(this.addTResultForm.value.examid);

      let payload = {};
      Object.assign(payload, this.addTResultForm.value);
      this.loading = true;

      this._ss.saveTotalResult(payload).subscribe(data => {
        console.log('data', data);
        this.showNotification('Submitted Successfully!!');

        this.addTResultForm.reset();

        this.showTForm = false;
        setTimeout(() => {
          this.showTForm = true;
        }, 0);

        this.addTResultForm.get('examid').patchValue(data.examid)
        this.getResult();
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
   * @memberof StudentAdmissionComponent
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
   * @memberof StudentAdmissionComponent
   */
  public onFormReset(event: Event, form?: any): void {
    if (event && form == 'addResult') {
      this.addResultForm.reset();
    } else {
      this.addTResultForm.reset();
    }
  }

  /**
   * @description Method to cancel form
   * @author Virendra Pandey
   * @date 2020-06-25
   * @memberof StudentAdmissionComponent
   */
  public onCancel(event: Event): void {
    if (event) {
      this.formCancel.emit(true);
    }
  }

}
