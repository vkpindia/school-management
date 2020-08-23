import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fees',
  templateUrl: './fees.component.html',
  styleUrls: ['./fees.component.scss']
})
export class FeesComponent implements OnInit {

 @Input() studentList: any = [];
 @Input() studentID: any;
 @Input() showList: boolean;

 @Output() onEditFee: EventEmitter<any> = new EventEmitter<any>();
 @Output() onDeleteFee: EventEmitter<any> = new EventEmitter<any>();

 @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
 @ViewChild(MatSort, {static: true}) TSort: MatSort;

  public displayedColumns: string[] = ['name', 'feetype', 'feeamount', 'paidamount', 'termname', 'actions'];
  public filterData: string = '';
  public recordLength: number;
  public isLoading: boolean = true;
  public feeList: MatTableDataSource<any>;
  public selection = new SelectionModel<any>(true, []);
  public showForm: boolean = false;
  public isCreate: boolean = false;

  // tslint:disable-next-line: variable-name
  constructor(private _router: Router) { }

  ngOnInit(): void {
    // method call
    this.getFeeList();
  }

 /*  ngAfterViewInit() {
    this.TSort.sortChange.subscribe(() => {
        this.paginator.pageIndex = 0;
        this.paginator.pageSize = this.pageSize;
    }); */
  /**
   * @description Method to get All parent record
   * @author Virendra Pandey
   * @date 2020-06-24
   * @memberof feeListComponent
   */
  public getFeeList() {
      if (this.studentList && this.studentList.length) {
        this.recordLength = this.studentList.length;
        this.feeList = new MatTableDataSource(this.studentList);
        this.feeList.sort = this.TSort;
        this.feeList.paginator = this.paginator;
        // this.showForm = true;
      }
      this.isLoading = false;
      // Assign the data to the data source for the table to render
      // this.feeList = new MatTableDataSource(data);
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @returns {boolean}
   * @memberof feeListComponent
   */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.feeList.data.length;
    return numSelected === numRows;
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @memberof feeListComponent
   */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.feeList.data.forEach(row => this.selection.select(row));
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @param {*} [row]
   * @returns {string}
   * @memberof feeListComponent
   */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  /**
   * @description Method to search parent record
   * @author Virendra Pandey
   * @date 2020-06-22
   * @param {*} event
   * @memberof feeListComponent
   */
  applyFilter(event: Event) {
    // console.log('list filter event', event);
    const filterValue = (event.target as HTMLInputElement).value;
    this.feeList.filter = filterValue.trim().toLowerCase();
    // console.log('this.feeList', this.feeList);
    if (this.feeList.paginator) {
      this.feeList.paginator.firstPage();
    }
  }

  /**
   * @description Method to route on edit page
   * @author Virendra Pandey
   * @date 2020-06-26
   * @param {*} row
   * @memberof feeListComponent
   */
  public onEdit(row): void {
    console.log('row', row);
    if(row){
      this.onDeleteFee.emit(row);
    }
  }

  /**
   * @description Method to route on edit page
   * @author Virendra Pandey
   * @date 2020-06-26
   * @param {*} row
   * @memberof feeListComponent
   */
  public onDelete(row): void {
    if(row){
      this.onDeleteFee.emit(row.id);
    }
  }


  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-08-18
   * @memberof SalaryListComponent
   */
  public getTransactions(): void {
    this._router.navigate(['fees/transactions'], { queryParams: { studentsID: this.studentID } })
  }
}
