import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { AttendanceService } from '../../../_services/attendance.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, FormControlName, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss'],
  providers: [DatePipe]
})
export class AttendanceComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) TSort: MatSort;

  public attendanceForm: FormGroup;

  public displayedColumns: string[] = ['select', 'name'];/* , 'actions' */
  public selectedIndex: number;
  public filterData: string = '';
  public recordLength: number;
  public isLoading: boolean = true;
  public classList: any = [];
  public sectionList: any = [];
  public classID: FormControl = new FormControl();
  public sectionID: FormControl = new FormControl();
  public part1: boolean;
  public part2: boolean;
  public shift: FormControl = new FormControl();
  public studentList: MatTableDataSource<any>;
  public absentStudentsID = [];

  public selection = new SelectionModel<any>(true, this.studentList ? this.studentList.data : []);
  // public selection2 = new SelectionModel<any>(true, []);

  public loading: boolean = false;
  public submitted: boolean = false;
  public isSelected: boolean = true;
  public isFormActive: boolean = true;
  public returnUrl: string;
  public error: string = '';
  public cardTitle: string = 'Add New Students';
  public showButtons: boolean = false;
  public buttonLabel: string = 'Submit';
  public showForm: boolean = true;

  public disabled = false;
  public showSpinners = true;
  public showSeconds = false;
  public touchUi = false;
  public enableMeridian = false;
  public stepHour = 1;
  public stepMinute = 1;
  public stepSecond = 1;
  public color: ThemePalette = 'primary';

  // tslint:disable-next-line: variable-name
  constructor(private _cs: AttendanceService
    , private _router: Router
    , private _activatedRout: ActivatedRoute
    , private _date: DatePipe
    , private _snackBar: MatSnackBar) {

    /*  if (initiallySelectedValues && initiallySelectedValues.length) {
       if (this._isMulti) {
         initiallySelectedValues.forEach(value => this._markSelected(value));
       } else {
         this._markSelected(initiallySelectedValues[0]);
       }

       // Clear the array in order to avoid firing the change event for preselected values.
       this._selectedToEmit.length = 0;
     } */
  }

  ngOnInit(): void {

    this.attendanceForm = new FormGroup({
      classid: new FormControl(null, Validators.required),
      sectionid: new FormControl(null, Validators.required),
      attendace_part: new FormControl(null, Validators.required),
      date: new FormControl(new Date(), Validators.required),
    })

    this.isAllSelected();
    // method call
    this.getClassSection();
    // this.getStudentList();
    /*     this.initialSelection = this.studentList.data.filter((element,e) => {
          return this.savedSelection.some( (val,i) => {
              if(element.key === val.key) {
                  this.data[e]['amount'] = val['amount'];
                  return true;
              }
          return;
       });
      }); */
      this.getStudentAttendanceList();
  }

  /*  ngAfterViewInit() {
     this.TSort.sortChange.subscribe(() => {
         this.paginator.pageIndex = 0;
         this.paginator.pageSize = this.pageSize;
     }); */

  /**
* @description
* @author Virendra Pandey
* @date 2020-07-21
* @memberof AddfeeComponent
*/
  public getClassSection() {
    // this.showForm = false;
    this._cs.getClassSection().subscribe(data => {
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
      this._cs.getSections(event.value).subscribe(section => {
        if (section) {
          this.sectionList = section;
        }
      })
    }
  }

  /**
   * @description Method to get All student record
   * @author Virendra Pandey
   * @date 2020-06-24
   * @memberof studentListComponent
   */
  public getStudentList() {
    if(this.attendanceForm.value.classid && this.attendanceForm.value.sectionid) {
      this._cs.getStudentRecord(this.attendanceForm.value.classid, this.attendanceForm.value.sectionid).subscribe((data: any) => {
        console.log('student Record', data);
        if (data) {
          this.recordLength = data.length;
          this.studentList = new MatTableDataSource(data);
          this.selection = new SelectionModel<any>(true, this.studentList.data);
          this.studentList.sort = this.TSort;
          this.studentList.paginator = this.paginator;
          this.isLoading = false;
        }
        // Assign the data to the data source for the table to render
        // this.studentList = new MatTableDataSource(data);
      });
    }
  }
  /**
   * @description Method to get All student record
   * @author Virendra Pandey
   * @date 2020-06-24
   * @memberof studentListComponent
   */
  public getStudentAttendanceList() {
    // if(this.attendanceForm.value.classid && this.attendanceForm.value.sectionid) {
      this._cs.getStudentAttendance(1, 2).subscribe((data: any) => {
        console.log('student Record', data);
        /* if (data) {
          this.recordLength = data.length;
          this.studentList = new MatTableDataSource(data);
          this.selection = new SelectionModel<any>(true, this.studentList.data);
          this.studentList.sort = this.TSort;
          this.studentList.paginator = this.paginator;
          this.isLoading = false;
        } */
        // Assign the data to the data source for the table to render
        // this.studentList = new MatTableDataSource(data);
      });
    // }
  }

  onSectionChange($event) {
    if ($event) {
      this.getStudentList();
    }
  }
  /**
 * @description convenience getter for easy access to form fields
 * @readonly
 * @memberof  StudentnotificationComponent
 */
  get f() { return this.attendanceForm.controls; }

  /**
   * @description Method to show notification
   * @author Virendra Pandey
   * @date 2020-06-24
   * @memberof StudentnotificationComponent
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
   * @memberof StudentnotificationComponent
   */
  public onFormReset(event: Event): void {
    if (event && this.attendanceForm) {
      this.attendanceForm.reset();
    }
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @returns {boolean}
   * @memberof studentListComponent
   */
  isAllSelected() {
    if (this.studentList) {
      const numSelected = this.selection.selected.length;
      const numRows = this.studentList.data.length;
      return numSelected === numRows;
    }
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-08-16
   * @param {*} row
   * @memberof AttendanceComponent
   */
  onSelectionToggle(row){
    if(this.selection.isSelected(row) == false){
      this.absentStudentsID.push(row.id)
    }
    console.log('this.selection.isSelected(row)', this.selection.isSelected(row));
     console.log('row', row);
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @memberof studentListComponent
   */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.studentList.data.forEach(row => this.selection.select(row));

    console.log('this.studentList.data', this.selection.selected);
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @param {*} [row]
   * @returns {string}
   * @memberof studentListComponent
   */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    // console.log('this.selection.isSelected(row)', this.selection.isSelected(row));
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  /**
   * @description Method to search student record
   * @author Virendra Pandey
   * @date 2020-06-22
   * @param {*} event
   * @memberof studentListComponent
   */
  applyFilter(event: Event) {
    // console.log('list filter event', event);
    const filterValue = (event.target as HTMLInputElement).value;
    this.studentList.filter = filterValue.trim().toLowerCase();
    // console.log('this.studentList', this.studentList);
    if (this.studentList.paginator) {
      this.studentList.paginator.firstPage();
    }
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-06-24
   * @returns undefined
   * @memberof StudentnotificationComponent
   */
  public onSubmit() {

    this.submitted = true;

    if (this.attendanceForm.invalid) {
      return;
    }

    if (this.attendanceForm.value) {
      this.attendanceForm.value.startdate = this._date.transform(this.attendanceForm.value.date, 'MM/dd/yyyy h:mm a');
    }

    let payload = {};
    Object.assign(payload, this.attendanceForm.value);
    if(payload['attendace_part'] === 'shift_1'){
      payload['part1'] = true;
      payload['part2'] = false;
      payload['absent_student_id1'] = this.absentStudentsID.toString();
      payload['absent_student_id2'] = null;
    } else if(this.attendanceForm.value.attendace_part === 'shift_2') {
      payload['part2'] = true;
      payload['part1'] = false;
      payload['absent_student_id2'] = this.absentStudentsID.toString();
      payload['absent_student_id1'] = null;
    }
    delete payload['attendace_part'];
    this.loading = true;
    this._cs.saveAttendance(payload).subscribe(data => {
      this.showNotification('Submitted Successfully!!');
      this.attendanceForm.reset();
      this.isFormActive = false;
      setTimeout(() => this.isFormActive = true, 0);
      this.getStudentList();
      this.showForm = false;
      this.studentList = new MatTableDataSource([]);
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

  /**
   * @description Method to route on view page
   * @author Virendra Pandey
   * @date 2020-07-01
   * @param {*} row
   * @memberof studentListComponent
   */
  /* public onView(row): void {
    console.log('row', row);
    this._router.navigate(['students/detail'], { queryParams: { id: row.id } });
  } */

}
