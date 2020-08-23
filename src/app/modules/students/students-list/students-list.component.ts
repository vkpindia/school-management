import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StudentsService } from '../../../_services/students.service';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})

export class StudentsListComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) TSort: MatSort;

  public displayedColumns: string[] = ['select', 'rollnumber', 'enrolnumber', 'name', 'sex', 'section', 'dob', 'mobilenumber', 'actions'];
  public filterData: string = '';
  public recordLength: number;
  public isLoading: boolean = true;
  public studentList: MatTableDataSource<any>;
  public selection = new SelectionModel<any>(true, []);

  // tslint:disable-next-line: variable-name
  constructor(private _ss: StudentsService, private _router: Router, private _activatedRout: ActivatedRoute) { }

  ngOnInit(): void {
    // method call
    this.getStudentList();
  }

 /*  ngAfterViewInit() {
    this.TSort.sortChange.subscribe(() => {
        this.paginator.pageIndex = 0;
        this.paginator.pageSize = this.pageSize;
    }); */
  /**
   * @description Method to get All student record
   * @author Virendra Pandey
   * @date 2020-06-24
   * @memberof StudentsListComponent
   */
  public getStudentList() {
    this._ss.getAllStudents().subscribe((data: any) => {
      console.log('data', data);
      if (data) {
        this.recordLength = data.length;
        this.studentList = new MatTableDataSource(data);
        this.studentList.sort = this.TSort;
        this.studentList.paginator = this.paginator;
        this.isLoading = false;
      }
      // Assign the data to the data source for the table to render
      // this.studentList = new MatTableDataSource(data);
    });
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @returns {boolean}
   * @memberof StudentsListComponent
   */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.studentList.data.length;
    return numSelected === numRows;
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @memberof StudentsListComponent
   */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.studentList.data.forEach(row => this.selection.select(row));
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @param {*} [row]
   * @returns {string}
   * @memberof StudentsListComponent
   */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  /**
   * @description Method to search student record
   * @author Virendra Pandey
   * @date 2020-06-22
   * @param {*} event
   * @memberof StudentsListComponent
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
   * @description Method to route on edit page
   * @author Virendra Pandey
   * @date 2020-06-26
   * @param {*} row
   * @memberof StudentsListComponent
   */
  public onEdit(row): void {
    if(row){
      console.log('row', row);
      this._router.navigate(['edit', row.id], { relativeTo: this._activatedRout });
    }
  }

  /**
   * @description Method to route on view page
   * @author Virendra Pandey
   * @date 2020-07-01
   * @param {*} row
   * @memberof StudentsListComponent
   */
  public onView(row): void {
    console.log('row', row);
    this._router.navigate(['students/details'], { queryParams: { id: row.id } });
  }

}
