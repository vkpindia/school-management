import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { SalaryService } from '../../../../_services/salary.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salary-list',
  templateUrl: './salary-list.component.html',
  styleUrls: ['./salary-list.component.scss']
})
export class SalaryListComponent implements OnInit {

  @Input() salaryList: any = [];
  @Input() teacherID: any;
  @Output() onEditSalary: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDeleteSalary: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) TSort: MatSort;

  public displayedColumns: string[] = ['name', 'grosssalary', 'netsalary', 'payamount', 'paydate', 'PFamount', 'actions'];
  public filterData: string = '';
  public recordLength: number;
  public isLoading: boolean = true;
  public feeList: MatTableDataSource<any>;
  public selection = new SelectionModel<any>(true, []);
  public showForm: boolean = false;
  public isCreate: boolean = false;
  public searchString: string;

  // tslint:disable-next-line: variable-name
  constructor(private _ss: SalaryService, private _router: Router) { }

  ngOnInit(): void {
    // method call
    this.getFeeList();
    this.applyFilter();
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
    if (this.salaryList && this.salaryList.length) {
      this.recordLength = this.salaryList.length;
      console.log('this.salaryList', this.salaryList);
      this.feeList = new MatTableDataSource(this.salaryList);
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
  applyFilter() {
    /*  // console.log('list filter event', event);
     const filterValue = (event.target as HTMLInputElement).value;
     this.feeList.filter = filterValue.trim().toLowerCase();
     // console.log('this.feeList', this.feeList);
     if (this.feeList.paginator) {
       this.feeList.paginator.firstPage();
     } */
    this._ss.searchTeacher().subscribe(data => {
      console.log('data', data);
    });
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
    if (row) {
      this.onEditSalary.emit(row);
    }
  }

  /**
  * @description Method to route on edit page
  * @author Virendra Pandey
  * @date 2020-06-26
  * @param {*} row
  * @memberof ClassListComponent
  */
  public onDelete(row): void {
    console.log('row', row);
    let isDelete: boolean = confirm("Are sure you want to delete this salary record?");
    if (isDelete) {
      this._ss.deleteSalary(row.id).subscribe(data => {
        this.onDeleteSalary.emit(true);
      })
    }
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-08-18
   * @memberof SalaryListComponent
   */
  public getTransactions(): void {
    this._router.navigate(['accounts/salary/transactions'], { queryParams: { techerID: this.teacherID } })
  }
}
