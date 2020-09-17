import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassService } from '../../../_services/class.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-class-add',
  templateUrl: './class-add.component.html',
  styleUrls: ['./class-add.component.scss']
})
export class ClassAddComponent implements OnInit {

  // VAriable declaration
  public classForm: FormGroup;
  public sectionForm: FormGroup;
  public loading: boolean = false;
  public submitted: boolean = false;
  public returnUrl: string;
  public error: string = '';
  public cardTitle: string = 'Add New Class';
  public showButtons: boolean = false;
  public isTabDisabled: boolean = true;
  public buttonLabel: string = 'Submit';
  public selectedIndex: number;
  public chipsAlert: string;
  public classSectionList: any = [];
  public sectionList: any = [];
  public showForm: boolean = true;

  public horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  public verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  // Chips variable declaration
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];


  constructor(
    // tslint:disable-next-line: variable-name
    private _snackBar: MatSnackBar,
    // tslint:disable-next-line: variable-name
    private _cs: ClassService
  ) { }

  ngOnInit(): void {
    this.classForm = new FormGroup({
      classname: new FormControl(null, Validators.required),
      section: new FormControl([], [Validators.required]),
      classteacher: new FormControl(null, Validators.required),
    });

    this.sectionForm = new FormGroup({
      classid: new FormControl(null, Validators.required),
      sectionname: new FormControl(null, Validators.required),
      subjects: new FormControl([], Validators.required),
    });

    // method call
    this.getClassList();
  }


  /**
   * @description convenience getter for easy access to form fields
   * @readonly
   * @memberof  ClassAddComponent
   */
  get sf() { return this.sectionForm.controls; }
  get cf() { return this.classForm.controls; }

/**
 * @description
 * @author Virendra Pandey
 * @date 2020-07-11
 * @param {MatChipInputEvent} event
 * @param {*} controls
 * @memberof TeacherAddComponent
 */
  addChips(event: MatChipInputEvent, form): void {
    const input = event.input;
    const value = event.value;
    console.log('value', value);
    // Add our fruit
    if ((value || '').trim()) {
        this.sf.subjects.setValue([...this.sf.subjects.value, value.trim()]);
        this.sf.subjects.updateValueAndValidity();
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-11
   * @param {*} ql
   * @memberof TeacherAddComponent
   */
  removeChips(chipsLabel): void {
      const index = this.sf.subjects.value.indexOf(chipsLabel);
      if (index >= 0) {
        this.sf.subjects.value.splice(index, 1);
        this.sf.subjects.updateValueAndValidity();
      }
  }

  /**
   * getClassList
   */
  public getClassList() {
    this._cs.getClassSection().subscribe(classSection => {
      if (classSection) {
        this.classSectionList = classSection;
      }
    });
  }
  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-06-24
   * @returns undefined
   * @memberof ClassAddComponent
   */
  public onSubmit(formType: string) {
    console.log('onSubmit');
    this.submitted = true;
    /* console.log('this.classForm.value', this.classForm.value);
    console.log('this.parentForm.value', this.sectionForm.value); */

    if (this.classForm.invalid && this.selectedIndex === 0) {
      return;
    }
    if (this.sectionForm.invalid && this.selectedIndex === 1) {
      return;
    }

    const payload = {};

    this.loading = true;
    if (formType === 'class') {
      Object.assign(payload, this.classForm.value);
      /* if (this.classForm.value.section && this.classForm.value.section.length) {
        this.classForm.value.section.forEach((section, inx) => {
          payload['section' + (inx + 1)] = section;
        });
      } */
      delete payload['section'];
      this._cs.addClass(payload).subscribe(() => {
        this.isTabDisabled = false;
        this.showNotification('Submitted Successfully!!');
        this.classForm.reset();
        this.showForm = false;
        setTimeout(() => {
          this.showForm = true;
        }, 100);
        this.getClassList();
        this.selectedIndex = 1;
      },
        error => {
          this.error = error;
          this.loading = false;
          console.error(this.error);
        });
    }
    if (formType === 'section') {
      if (this.sectionForm.value.subjects && this.sectionForm.value.subjects.length) {
        this.sectionForm.value.subjects = this.sectionForm.value.subjects.length ? this.sectionForm.value.subjects.toString() : null;
      }

      this.sectionForm.value.classid = parseInt(this.sectionForm.value.classid, 10);
      Object.assign(payload, this.sectionForm.value);
      this._cs.addSection(payload).subscribe(data => {
        console.log('data', data);
        this.showNotification('Submitted Successfully!!');
        this.sectionForm.reset();
        this.sf.subjects.setValue([]);
        this.showForm = false;
        setTimeout(() => {
          this.showForm = true;
        }, 100);
      },
        error => {
          this.error = error;
          this.loading = false;
          console.error(this.error);
        });
    }
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
      console.log('event', event);
      console.log('this.classSectionList', this.classSectionList);
      this.sectionList = this.classSectionList.find(section => section.classid === event.value).section;
      console.log('this.sectionList', this.sectionList);
    }
  }
  /**
   * @description Method to show notification
   * @author Virendra Pandey
   * @date 2020-06-24
   * @memberof ClassAddComponent
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
   * @memberof ClassAddComponent
   */
  public onFormReset(event: Event, formType: string): void {
    if (event && formType === 'class') {
      this.classForm.reset();
    }
    if (event && formType === 'section') {
      this.sectionForm.reset();
    }
  }
}
