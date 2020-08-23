import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router, ActivatedRoute } from '@angular/router';
import { ClassService } from '../../../_services/class.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss']
})
export class ClassListComponent implements OnInit {

    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) TSort: MatSort;

    public displayedColumns: string[] = ['classname', 'classteacher', 'sectionname', 'subjects', 'actions'];
    public filterData: string = '';
    public recordLength: number;
    public isLoading: boolean = true;
    public classList: MatTableDataSource<any>;
    public selection = new SelectionModel<any>(true, []);

    // tslint:disable-next-line: variable-name
    constructor(private _cs: ClassService, private _router: Router, private _activatedRout: ActivatedRoute) { }

    ngOnInit(): void {
      // method call
      this.getClassList();
    }

   /*  ngAfterViewInit() {
      this.TSort.sortChange.subscribe(() => {
          this.paginator.pageIndex = 0;
          this.paginator.pageSize = this.pageSize;
      }); */
    /**
     * @description Method to get All class record
     * @author Virendra Pandey
     * @date 2020-06-24
     * @memberof ClassListComponent
     */
    public getClassList() {
      this._cs.getClassList().subscribe((data: any) => {
        console.log('class data', data);
        if (data) {
          this.recordLength = data.length;
          this.classList = new MatTableDataSource(data);
          this.classList.sort = this.TSort;
          this.classList.paginator = this.paginator;
          this.isLoading = false;
        }
        // Assign the data to the data source for the table to render
        // this.classList = new MatTableDataSource(data);
      });
    }

    /**
     * @description
     * @author Virendra Pandey
     * @date 2020-07-03
     * @returns {boolean}
     * @memberof ClassListComponent
     */
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.classList.data.length;
      return numSelected === numRows;
    }

    /**
     * @description
     * @author Virendra Pandey
     * @date 2020-07-03
     * @memberof ClassListComponent
     */
    masterToggle() {
      this.isAllSelected() ?
        this.selection.clear() :
        this.classList.data.forEach(row => this.selection.select(row));
    }

    /**
     * @description
     * @author Virendra Pandey
     * @date 2020-07-03
     * @param {*} [row]
     * @returns {string}
     * @memberof ClassListComponent
     */
    checkboxLabel(row?: any): string {
      if (!row) {
        return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
      }
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }

    /**
     * @description Method to search class record
     * @author Virendra Pandey
     * @date 2020-06-22
     * @param {*} event
     * @memberof ClassListComponent
     */
    applyFilter(event: Event) {
      // console.log('list filter event', event);
      const filterValue = (event.target as HTMLInputElement).value;
      this.classList.filter = filterValue.trim().toLowerCase();
      // console.log('this.classList', this.classList);
      if (this.classList.paginator) {
        this.classList.paginator.firstPage();
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
      let isDelete:boolean = confirm("Are sure you want to delete this class record?");
      if(isDelete){
        this._cs.deleteClass(row.id).subscribe(data=>{
            this.getClassList();
        })
      }
    }

    /**
     * @description Method to route on view page
     * @author Virendra Pandey
     * @date 2020-07-01
     * @param {*} row
     * @memberof ClassListComponent
     */
    public onView(row): void {
      console.log('row', row);
      this._router.navigate(['classs/detail'], { queryParams: { id: row.id } });
    }
}
