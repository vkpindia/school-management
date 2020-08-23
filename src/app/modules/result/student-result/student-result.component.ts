import { Component, OnInit, ViewChild, Input, SimpleChanges, OnChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ResultService } from '../../../_services/result.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.scss']
})
export class StudentResultComponent implements OnInit, OnChanges {

  @Input() studentResultList: Array<any> = [];
  @Input() isResultReady: boolean;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) TSort: MatSort;

  public displayedColumns: string[] = ['select', 'examid','studentid', 'subject', 'marks', 'percetage', 'grade'];
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

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.getexamList();
  }

  ngOnInit(): void {
    // method call
    this.getexamList();
  }

  /**
   * @description Method to get All student record
   * @author Virendra Pandey
   * @date 2020-06-24
   * @memberof StudentsListComponent
   */
  public getexamList() {
      if (this.studentResultList && this.studentResultList.length) {
        this.recordLength = this.studentResultList.length;
        this.examList = new MatTableDataSource(this.studentResultList);
        this.examList.sort = this.TSort;
        this.examList.paginator = this.paginator;
      }
      this.isLoading = false;
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

}
