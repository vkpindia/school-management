import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ResultService } from '../../../_services/result.service';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss']
})
export class ResultListComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) TSort: MatSort;

  public displayedColumns: string[] = ['select', 'examname', 'startdate', 'enddate', 'examdescription', 'actions'];
  public filterData: string = '';
  public recordLength: number;
  public isLoading: boolean = true;
  public examList: MatTableDataSource<any>;
  public classList: any = [];
  public sectionList: any = [];
  public classID: FormControl = new FormControl();
  public sectionID: FormControl = new FormControl();
  public selection = new SelectionModel<any>(true, []);

  // tslint:disable-next-line: variable-name
  constructor(private _ss: ResultService, private _router: Router, private _activatedRout: ActivatedRoute) { }

  ngOnInit(): void {
    // method call
    // this.getexamList();
    this.getClassSection();
  }

  /**
 * @description
 * @author Virendra Pandey
 * @date 2020-07-21
 * @memberof AddfeeComponent
 */
public getClassSection() {
  // this.showForm = false;
  this._ss.getClassSection().subscribe(data => {
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
    this._ss.getSections(event.value).subscribe(section => {
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
   * @memberof StudentsListComponent
   */
  public getexamList() {
    this._ss.getExamResult(this.classID.value, this.sectionID.value).subscribe((data: any) => {
      console.log('data', data);
      if (data) {
        this.recordLength = data.length;
        this.examList = new MatTableDataSource(data);
        this.examList.sort = this.TSort;
        this.examList.paginator = this.paginator;
      }
      this.isLoading = false;
      // Assign the data to the data source for the table to render
      // this.examList = new MatTableDataSource(data);
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
    if(this.examList && this.examList.data){
      const numSelected = this.selection.selected.length;
      const numRows = this.examList['data'].length;
      return numSelected === numRows;
    }
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @memberof StudentsListComponent
   */
  masterToggle() {
    if(this.examList && this.examList.data){
      this.isAllSelected() ?
        this.selection.clear() :
        this.examList['data'].forEach(row => this.selection.select(row));
    }
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
    this.examList.filter = filterValue.trim().toLowerCase();
    // console.log('this.examList', this.examList);
    if (this.examList.paginator) {
      this.examList.paginator.firstPage();
    }
  }

  /**
   * @description Method to route on edit page
   * @author Virendra Pandey
   * @date 2020-06-26
   * @param {*} row
   * @memberof StudentsListComponent
   */
  public addResult(row): void {
    if(row){
      console.log('row', row);
      this._ss.setExamRecord(row)
      this._router.navigate(['exam-result/add'], {queryParams: {examid: row.examid, sectionid: row.sectionid, classid: row.classid}});
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
