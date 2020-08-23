import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router, ActivatedRoute } from '@angular/router';
import { TermsService } from '../../../../_services/terms.service';


@Component({
  selector: 'app-term-list',
  templateUrl: './term-list.component.html',
  styleUrls: ['./term-list.component.scss']
})
export class TermListComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) TSort: MatSort;

  public displayedColumns: string[] = ['termname', 'termstartdate', 'termenddate', 'actions'];
  public filterData: string = '';
  public recordLength: number;
  public isLoading: boolean = true;
  public termList: MatTableDataSource<any>;
  public selection = new SelectionModel<any>(true, []);
  public showForm: boolean = false;
  public isCreate: boolean = false;

  // tslint:disable-next-line: variable-name
  constructor(private _es: TermsService, private _router: Router, private _activatedRout: ActivatedRoute) { }

  ngOnInit(): void {
    // method call
    this.gettermList();
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
   * @memberof TermListComponent
   */
  public gettermList() {
    this._es.getTerms().subscribe((data: any) => {
      console.log('parent data', data);
      if (data) {
        this.recordLength = data.length;
        this.termList = new MatTableDataSource(data);
        this.termList.sort = this.TSort;
        this.termList.paginator = this.paginator;
        this.isLoading = false;
        // this.showForm = true;
      }
      // Assign the data to the data source for the table to render
      // this.termList = new MatTableDataSource(data);
    });
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @returns {boolean}
   * @memberof TermListComponent
   */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.termList.data.length;
    return numSelected === numRows;
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @memberof TermListComponent
   */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.termList.data.forEach(row => this.selection.select(row));
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @param {*} [row]
   * @returns {string}
   * @memberof TermListComponent
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
   * @memberof TermListComponent
   */
  applyFilter(event: Event) {
    // console.log('list filter event', event);
    const filterValue = (event.target as HTMLInputElement).value;
    this.termList.filter = filterValue.trim().toLowerCase();
    // console.log('this.termList', this.termList);
    if (this.termList.paginator) {
      this.termList.paginator.firstPage();
    }
  }

      /**
     * @description Method to route on edit page
     * @author Virendra Pandey
     * @date 2020-06-26
     * @param {*} row
     * @memberof TermListComponent
     */
    public onDelete(row:any): void {
      console.log('row', row);
      let isDelete:boolean = confirm("Are sure you want to delete this Term?");
      if(isDelete){
        this._es.deleteTerm(row.id).subscribe(data=>{
            this.gettermList();
        })
      }
    }

    public openForm(): void{
      this.isLoading = false;
      this._router.navigate(['add'], {relativeTo: this._activatedRout.parent});
      // this.showForm = true;
    }

  /**
   * @description Method to navigate on list page after successfull form submission
   * @author Virendra Pandey
   * @date 2020-06-26
   * @param {*} event
   * @memberof EdittermComponent
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
   * @memberof EdittermComponent
   */
  public onFormCancel(event): void {
    console.log('event', event);
    this.showForm = false;
    if (event) {
      this._router.navigate(['./'], { relativeTo: this._activatedRout.parent });
    }
  }

}
