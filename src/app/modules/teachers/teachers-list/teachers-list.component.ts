import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router, ActivatedRoute } from '@angular/router';
import { TeachersService } from '../../../_services/teachers.service';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.scss']
})
export class TeachersListComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) TSort: MatSort;

  public displayedColumns: string[] = ['select', 'id', 'name', 'sex', 'class', 'subject', 'address', 'mobilenumber', 'email', 'actions'];
  public filterData: string = '';
  public recordLength: number;
  public isLoading: boolean = true;
  public teacherList: MatTableDataSource<any>;
  public selection = new SelectionModel<any>(true, []);

  // tslint:disable-next-line: variable-name
  constructor(private _ts: TeachersService, private _router: Router, private _activatedRout: ActivatedRoute) { }

  ngOnInit(): void {
    // method call
    this.getTeacherList();
  }

  /**
   * @description Method to get All teacher record
   * @author Virendra Pandey
   * @date 2020-06-24
   * @memberof TeachersListComponent
   */
  public getTeacherList() {
    this._ts.getAllTeacher().subscribe((data: any) => {
      console.log('teacher data', data);
      if (data) {
        this.recordLength = data.length;
        this.teacherList = new MatTableDataSource(data);
        this.teacherList.sort = this.TSort;
        this.teacherList.paginator = this.paginator;
        this.isLoading = false;
      }
      // Assign the data to the data source for the table to render
      // this.teacherList = new MatTableDataSource(data);
    });
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @returns {boolean}
   * @memberof TeachersListComponent
   */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.teacherList.data.length;
    return numSelected === numRows;
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @memberof TeachersListComponent
   */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.teacherList.data.forEach(row => this.selection.select(row));
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @param {*} [row]
   * @returns {string}
   * @memberof TeachersListComponent
   */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  /**
   * @description Method to search teacher record
   * @author Virendra Pandey
   * @date 2020-06-22
   * @param {*} event
   * @memberof TeachersListComponent
   */
  applyFilter(event: Event) {
    // console.log('list filter event', event);
    const filterValue = (event.target as HTMLInputElement).value;
    this.teacherList.filter = filterValue.trim().toLowerCase();
    // console.log('this.teacherList', this.teacherList);
    if (this.teacherList.paginator) {
      this.teacherList.paginator.firstPage();
    }
  }

  /**
   * @description Method to route on edit page
   * @author Virendra Pandey
   * @date 2020-06-26
   * @param {*} row
   * @memberof TeachersListComponent
   */
  public onEdit(row): void {
    console.log('row', row);
    this._router.navigate(['edit', row.id], { relativeTo: this._activatedRout });
  }

  /**
   * @description Method to route on view page
   * @author Virendra Pandey
   * @date 2020-07-01
   * @param {*} row
   * @memberof TeachersListComponent
   */
  public onView(row): void {
    console.log('row', row);
    this._router.navigate(['staff/detail'], { queryParams: { id: row.id } });
  }
}
