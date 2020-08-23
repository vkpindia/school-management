import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router, ActivatedRoute } from '@angular/router';
import { FeeService } from '../../../../_services/fee.service';

@Component({
  selector: 'app-fee-list',
  templateUrl: './fee-list.component.html',
  styleUrls: ['./fee-list.component.scss']
})
export class FeeListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) TSort: MatSort;

  public displayedColumns: string[] = ['classname', 'sectionname', 'feetype', 'price', 'termname', 'actions'];
  public filterData: string = '';
  public recordLength: number;
  public isLoading: boolean = true;
  public feeList: MatTableDataSource<any>;
  public selection = new SelectionModel<any>(true, []);
  public showForm: boolean = false;
  public isCreate: boolean = false;

  // tslint:disable-next-line: variable-name
  constructor(private _es: FeeService, private _router: Router, private _activatedRout: ActivatedRoute) { }

  ngOnInit(): void {
    // method call
    this.getFeeList();
    if(this._activatedRout.routeConfig.path=='add'){
      this.showForm = true;
      this.isCreate = true;
      this.isLoading = false;
    }
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
    this._es.getFeeList().subscribe((data: any) => {
      console.log('parent data', data);
      if (data) {
        this.recordLength = data.length;
        this.feeList = new MatTableDataSource(data);
        this.feeList.sort = this.TSort;
        this.feeList.paginator = this.paginator;
        this.isLoading = false;
        // this.showForm = true;
      }
      // Assign the data to the data source for the table to render
      // this.feeList = new MatTableDataSource(data);
    });
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
    public onDelete(row:any): void {
      console.log('row', row);
      let isDelete:boolean = confirm("Are sure you want to delete fee record?");
      if(isDelete){
        this._es.deleteFee(row.id).subscribe(data=>{
            this.getFeeList();
        })
      }
    }

    public openForm(): void{
      this.isLoading = false;
      this._router.navigate(['add'], {relativeTo: this._activatedRout.parent});
      // this.showForm = true;
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
    this._router.navigate(['edit', row.id], { relativeTo: this._activatedRout });
  }

  /**
   * @description Method to route on view page
   * @author Virendra Pandey
   * @date 2020-07-01
   * @param {*} row
   * @memberof feeListComponent
   */
  public onView(row): void {
    console.log('row', row);
    this._router.navigate(['parents/detail'], { queryParams: { id: row.id } });
  }

  /**
   * @description Method to navigate on list page after successfull form submission
   * @author Virendra Pandey
   * @date 2020-06-26
   * @param {*} event
   * @memberof EditfeeComponent
   */
  public onFormSubmit(event): void {
    console.log('event', event);
    if (event) {
      this._router.navigate(['./'], { relativeTo: this._activatedRout.parent });
    }
  }

  /**
   * @description Method to navigate on list page on cancel
   * @author Virendra Pandey
   * @date 2020-06-26
   * @param {*} event
   * @memberof EditfeeComponent
   */
  public onFormCancel(event): void {
    console.log('event', event);
    this.showForm = false;
    if (event) {
      this._router.navigate(['./'], { relativeTo: this._activatedRout.parent });
    }
  }
}
