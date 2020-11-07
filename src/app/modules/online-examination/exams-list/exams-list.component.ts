import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild, OnChanges, ChangeDetectorRef, DoCheck } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router, ActivatedRoute } from '@angular/router';
import { AttendanceService } from '../../../_services/attendance.service';
import { AssessmentService } from '../../../_services/assessment.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-exams-list',
  templateUrl: './exams-list.component.html',
  styleUrls: ['./exams-list.component.scss']
})
export class ExamsListComponent implements OnInit, OnChanges {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) TSort: MatSort;

  @Output() examEdit: EventEmitter<any> = new EventEmitter();
  @Input() updateExamList: boolean;

  public displayedColumns: string[] = ['select', 'examname', 'classname', 'sectionname', 'subjectame', 'timeallotted', 'totalquestions', 'totalmarks', 'examdate', 'actions'];
  public filterData: string = '';
  public recordLength: number;
  public isLoading: boolean = true;
  public resultList: MatTableDataSource<any>;
  public selection = new SelectionModel<any>(true, []);

  public classID: FormControl = new FormControl();
  public sectionID: FormControl = new FormControl();
  public examID: FormControl = new FormControl();

  public classList: any = [];
  public sectionList: any = [];
  public examList: any = [];

  // tslint:disable-next-line: variable-name
  constructor(
    private _cs: AttendanceService,
    private _router: Router,
    private _activatedRout: ActivatedRoute,
    private as: AssessmentService,
    private cd: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject
    // dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    this.cd.detectChanges();
    if (this.updateExamList) {
      this.getResults();
    }

  }

  ngOnInit(): void {
    // method call
    this.getClassSection();
  }

  /* ngDoCheck(): void {
    // Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    // Add 'implements DoCheck' to the class.
    console.log('this.updateExamList', this.updateExamList);
    if (this.updateExamList) {
      this.getResults();
    }
  } */

  /**
   * @description Method to get All Attendance record
   * @author Virendra Pandey
   * @date 2020-06-24
   * @memberof AttendanceListComponent
   */
  public getResults() {
    this.as.getExams(this.classID.value, this.sectionID.value).subscribe(data => {
      if (Array.isArray(data)) {
        this.recordLength = data.length;
        this.resultList = new MatTableDataSource(data);
        this.resultList.sort = this.TSort;
        this.resultList.paginator = this.paginator;
        this.isLoading = false;
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
   * @description
   * @author Virendra Pandey
   * @date 2020-10-24
   * @memberof ExamResultComponent
   */
  public getExamList(): void {
    this.as.getExams(this.classID.value, this.sectionID.value).subscribe(data => {
      if (data) {
        this.examList = data;
      }
    });
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @returns {boolean}
   * @memberof AttendanceListComponent
   */
  isAllSelected() {
    if (this.classID.value && this.sectionID.value && this.resultList) {
      const numSelected = this.selection.selected.length;
      const numRows = this.resultList.data.length;
      return numSelected === numRows;
    }
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @memberof AttendanceListComponent
   */
  masterToggle() {
    if (this.classID.value && this.sectionID.value) {
      this.isAllSelected() ?
        this.selection.clear() :
        this.resultList.data.forEach(row => this.selection.select(row));
    }
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @param {*} [row]
   * @returns {string}
   * @memberof AttendanceListComponent
   */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  /**
   * @description Method to search Attendance record
   * @author Virendra Pandey
   * @date 2020-06-22
   * @param {*} event
   * @memberof AttendanceListComponent
   */
  applyFilter(event: Event) {
    // console.log('list filter event', event);
    const filterValue = (event.target as HTMLInputElement).value;
    this.resultList.filter = filterValue.trim().toLowerCase();
    // console.log('this.AttendanceList', this.AttendanceList);
    if (this.resultList.paginator) {
      this.resultList.paginator.firstPage();
    }
  }

  /**
   * @description Method to route on edit page
   * @author Virendra Pandey
   * @date 2020-06-26
   * @param {*} row
   * @memberof AttendanceListComponent
   */
  public onDelete(row): void {
    let isDelete: boolean = confirm("Are sure you want to delete this exam?");
    if (isDelete) {
      this.as.deleteExamSetup(row.id).subscribe(data => {
        this.getResults();
      });
    }
  }

  /**
   * @description Method to route on edit page
   * @author Virendra Pandey
   * @date 2020-06-26
   * @param {*} row
   * @memberof AttendanceListComponent
   */
  public onEdit(row): void {
    if (row) {
      this.examEdit.emit(row);
    }
  }
}
