import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TransportService } from '../../../_services/transport.service';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-transport-list',
  templateUrl: './transport-list.component.html',
  styleUrls: ['./transport-list.component.scss']
})
export class TransportListComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) TSort: MatSort;

  public displayedColumns: string[] = ['select', 'routename', 'vehiclenumber', 'seatingcapacity', 'drivername', 'driving_liciense_numebr', 'attendername', 'attender_number', 'actions'];
  public filterData: string = '';
  public recordLength: number;
  public isLoading: boolean = true;
  public transportList: MatTableDataSource<any>;
  public selection = new SelectionModel<any>(true, []);

  // tslint:disable-next-line: variable-name
  constructor(private _ss: TransportService, private _router: Router, private _activatedRout: ActivatedRoute) { }

  ngOnInit(): void {
    // method call
    this.gettransportList();
  }

  /*  ngAfterViewInit() {
     this.TSort.sortChange.subscribe(() => {
         this.paginator.pageIndex = 0;
         this.paginator.pageSize = this.pageSize;
     }); */
  /**
   * @description Method to get All transport record
   * @author Virendra Pandey
   * @date 2020-06-24
   * @memberof TransportListComponent
   */
  public gettransportList() {
    this._ss.getTransportList().subscribe((data: any) => {
      console.log('data', data);
      if (data) {
        this.recordLength = data.length;
        this.transportList = new MatTableDataSource(data);
        this.transportList.sort = this.TSort;
        this.transportList.paginator = this.paginator;
        this.isLoading = false;
      }
      // Assign the data to the data source for the table to render
      // this.transportList = new MatTableDataSource(data);
    });
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @returns {boolean}
   * @memberof TransportListComponent
   */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.transportList.data.length;
    return numSelected === numRows;
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @memberof TransportListComponent
   */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.transportList.data.forEach(row => this.selection.select(row));
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @param {*} [row]
   * @returns {string}
   * @memberof TransportListComponent
   */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  /**
   * @description Method to search transport record
   * @author Virendra Pandey
   * @date 2020-06-22
   * @param {*} event
   * @memberof TransportListComponent
   */
  applyFilter(event: Event) {
    // console.log('list filter event', event);
    const filterValue = (event.target as HTMLInputElement).value;
    this.transportList.filter = filterValue.trim().toLowerCase();
    // console.log('this.transportList', this.transportList);
    if (this.transportList.paginator) {
      this.transportList.paginator.firstPage();
    }
  }

  /**
   * @description Method to route on edit page
   * @author Virendra Pandey
   * @date 2020-06-26
   * @param {*} row
   * @memberof TransportListComponent
   */
  public onEdit(row): void {
    if (row) {
      this._router.navigate(['edit', row.id], { relativeTo: this._activatedRout });
    }
  }

  /**
   * @description Method to route on view page
   * @author Virendra Pandey
   * @date 2020-07-01
   * @param {*} row
   * @memberof TransportListComponent
   */
  public onDelete(id): void {
    if (id) {
      let isDelete = confirm('Are you sure? You want to delete this transport!!')
      if (isDelete) {
        this._ss.deleteTransport(id).subscribe(data => {
          this.gettransportList();
        })
      }
    }
  }
}
