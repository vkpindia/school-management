import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})

export class TransactionsComponent implements OnInit {

  @Input() displayedColumns: any[];
  @Input() transactionsList: any = [];

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) TSort: MatSort;

  // public displayedColumns: string[] = ['name', 'grosssalary', 'netsalary', 'payamount', 'paydate', 'PFamount', 'actions'];
  public filterData: string = '';
  public recordLength: number;
  public isLoading: boolean = true;
  public selection = new SelectionModel<any>(true, []);
  public transactionList: MatTableDataSource<any>;
  public showForm: boolean = false;
  public isCreate: boolean = false;
  public searchString: string;

  // tslint:disable-next-line: variable-name
  constructor() {

  }

  ngOnInit(): void {
    // method call
    console.log('displayedColumns', this.displayedColumns);
    this.getTransactionList();
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
   * @memberof TransactionsComponent
   */
  public getTransactionList() {
    if (this.transactionsList && this.transactionsList.length) {
      this.recordLength = this.transactionsList.length;
      console.log('this.salaryList', this.transactionsList);
      this.transactionList = new MatTableDataSource(this.transactionsList);
      this.transactionList.sort = this.TSort;
      this.transactionList.paginator = this.paginator;
      // this.showForm = true;
    }
    this.isLoading = false;
    // Assign the data to the data source for the table to render
    // this.transactionList = new MatTableDataSource(data);
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @returns {boolean}
   * @memberof TransactionsComponent
   */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.transactionList.data.length;
    return numSelected === numRows;
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @memberof TransactionsComponent
   */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.transactionList.data.forEach(row => this.selection.select(row));
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @param {*} [row]
   * @returns {string}
   * @memberof TransactionsComponent
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
   * @memberof TransactionsComponent
   */
  applyFilter() {
    // console.log('list filter event', event);
    const filterValue = (event.target as HTMLInputElement).value;
    this.transactionList.filter = filterValue.trim().toLowerCase();
    // console.log('this.transactionList', this.transactionList);
    if (this.transactionList.paginator) {
      this.transactionList.paginator.firstPage();
    }
  }
}
