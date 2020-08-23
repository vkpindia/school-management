import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router, ActivatedRoute } from '@angular/router';
import { AttendanceService } from '../../../_services/attendance.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-attendance-list',
  templateUrl: './attendance-list.component.html',
  styleUrls: ['./attendance-list.component.scss']
})
export class AttendanceListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) TSort: MatSort;

  public displayedColumns: string[] = ['select', 'absent_student_id1', 'classid', 'sectionid', 'date', 'actions'];
  public filterData: string = '';
  public recordLength: number;
  public isLoading: boolean = true;
  public attendanceList: MatTableDataSource<any>;
  public selection = new SelectionModel<any>(true, []);

  public classID: FormControl = new FormControl();
  public sectionID: FormControl = new FormControl();

  public classList: any = [];
  public sectionList: any = [];

  // tslint:disable-next-line: variable-name
  constructor(private _cs: AttendanceService, private _router: Router, private _activatedRout: ActivatedRoute) { }

  ngOnInit(): void {
    // method call
    this.getClassSection();
  }

 /*  ngAfterViewInit() {
    this.TSort.sortChange.subscribe(() => {
        this.paginator.pageIndex = 0;
        this.paginator.pageSize = this.pageSize;
    }); */
  /**
   * @description Method to get All Attendance record
   * @author Virendra Pandey
   * @date 2020-06-24
   * @memberof AttendanceListComponent
   */
  public getAttendanceList() {
      this._cs.getStudentAttendance(this.classID.value, this.sectionID.value).subscribe((data: any) => {
        if (data) {
          this.recordLength = data.length;
          this.attendanceList = new MatTableDataSource(data);
          this.attendanceList.sort = this.TSort;
          this.attendanceList.paginator = this.paginator;
        }
        this.isLoading = false;
        // Assign the data to the data source for the table to render
        // this.AttendanceList = new MatTableDataSource(data);
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
   * @date 2020-07-03
   * @returns {boolean}
   * @memberof AttendanceListComponent
   */
  isAllSelected() {
    if(this.classID.value && this.sectionID.value && this.attendanceList){
      const numSelected = this.selection.selected.length;
      const numRows = this.attendanceList.data.length;
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
    if(this.classID.value && this.sectionID.value){
      this.isAllSelected() ?
        this.selection.clear() :
        this.attendanceList.data.forEach(row => this.selection.select(row));
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
    this.attendanceList.filter = filterValue.trim().toLowerCase();
    // console.log('this.AttendanceList', this.AttendanceList);
    if (this.attendanceList.paginator) {
      this.attendanceList.paginator.firstPage();
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
    console.log('row', row);
    let isDelete:boolean = confirm("Are sure you want to delete this attendance record?");
    if(isDelete){
      this._cs.deleteAttendance(row.id).subscribe(data=>{
          this.getAttendanceList();
      })
    }
  }

}
