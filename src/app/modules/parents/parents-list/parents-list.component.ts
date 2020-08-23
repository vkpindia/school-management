import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router, ActivatedRoute } from '@angular/router';
import { ParentsService } from '../../../_services/parents.service';

@Component({
  selector: 'app-parents-list',
  templateUrl: './parents-list.component.html',
  styleUrls: ['./parents-list.component.scss']
})
export class ParentsListComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) TSort: MatSort;

  public displayedColumns: string[] = ['select', 'id', 'name', 'sex', 'occupation', 'address', 'mobilenumber', 'email', 'actions'];
  public filterData: string = '';
  public recordLength: number;
  public isLoading: boolean = true;
  public parentList: MatTableDataSource<any>;
  public selection = new SelectionModel<any>(true, []);

  // tslint:disable-next-line: variable-name
  constructor(private _ps: ParentsService, private _router: Router, private _activatedRout: ActivatedRoute) { }

  ngOnInit(): void {
    // method call
    this.getparentList();
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
   * @memberof ParentsListComponent
   */
  public getparentList() {
    this._ps.getAllParent().subscribe((data: any) => {
      console.log('parent data', data);
      if (data) {
        this.recordLength = data.length;
        this.parentList = new MatTableDataSource(data);
        this.parentList.sort = this.TSort;
        this.parentList.paginator = this.paginator;
        this.isLoading = false;
      }
      // Assign the data to the data source for the table to render
      // this.parentList = new MatTableDataSource(data);
    });
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @returns {boolean}
   * @memberof ParentsListComponent
   */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.parentList.data.length;
    return numSelected === numRows;
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @memberof ParentsListComponent
   */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.parentList.data.forEach(row => this.selection.select(row));
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @param {*} [row]
   * @returns {string}
   * @memberof ParentsListComponent
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
   * @memberof ParentsListComponent
   */
  applyFilter(event: Event) {
    // console.log('list filter event', event);
    const filterValue = (event.target as HTMLInputElement).value;
    this.parentList.filter = filterValue.trim().toLowerCase();
    // console.log('this.parentList', this.parentList);
    if (this.parentList.paginator) {
      this.parentList.paginator.firstPage();
    }
  }

  /**
   * @description Method to route on edit page
   * @author Virendra Pandey
   * @date 2020-06-26
   * @param {*} row
   * @memberof ParentsListComponent
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
   * @memberof ParentsListComponent
   */
  public onView(row): void {
    console.log('row', row);
    this._router.navigate(['parents/detail'], { queryParams: { id: row.id } });
  }
}
