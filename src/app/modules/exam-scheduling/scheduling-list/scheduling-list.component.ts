import { Component, OnInit, SimpleChanges, OnChanges, Input, ViewChild } from '@angular/core';
import { ExamSchedulingService } from '../../../_services/exam-scheduling.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-scheduling-list',
  templateUrl: './scheduling-list.component.html',
  styleUrls: ['./scheduling-list.component.scss']
})
export class SchedulingListComponent implements OnInit, OnChanges {


  @Input() isFormSubmit: boolean;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) TSort: MatSort;

  public displayedColumns: string[] = ['examname', 'startdate', 'enddate', 'examdescription', 'actions'];
  public filterData: string = '';
  public recordLength: number;
  public isLoading: boolean = true;
  public scheduledExamList: MatTableDataSource<any>;
  public selection = new SelectionModel<any>(true, []);

  constructor(private _ens: ExamSchedulingService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.isFormSubmit) {
      this.getScheduledExamList();
    }
  }

  ngOnInit(): void {
    this.getScheduledExamList();
  }

  /*  ngAfterViewInit() {
   this.TSort.sortChange.subscribe(() => {
       this.paginator.pageIndex = 0;
       this.paginator.pageSize = this.pageSize;
   }); */
  /**
   * @description Method to get All student record
   * @author Virendra Pandey
   * @date 2020-06-24
   * @memberof SchedulingListComponent
   */
  public getScheduledExamList() {
    this._ens.getScheduledExams().subscribe((data: any) => {
      console.log('data', data);
      if (data) {
        this.recordLength = data.length;
        this.scheduledExamList = new MatTableDataSource(data);
        this.scheduledExamList.sort = this.TSort;
        this.scheduledExamList.paginator = this.paginator;
        this.isLoading = false;
      }
      // Assign the data to the data source for the table to render
      // this.studentList = new MatTableDataSource(data);
    });
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @returns {boolean}
   * @memberof SchedulingListComponent
   */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.scheduledExamList.data.length;
    return numSelected === numRows;
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @memberof SchedulingListComponent
   */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.scheduledExamList.data.forEach(row => this.selection.select(row));
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @param {*} [row]
   * @returns {string}
   * @memberof SchedulingListComponent
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
   * @memberof SchedulingListComponent
   */
  applyFilter(event: Event) {
    // console.log('list filter event', event);
    const filterValue = (event.target as HTMLInputElement).value;
    this.scheduledExamList.filter = filterValue.trim().toLowerCase();
    // console.log('this.studentList', this.studentList);
    if (this.scheduledExamList.paginator) {
      this.scheduledExamList.paginator.firstPage();
    }
  }

  /**
* @description Method to route on edit page
* @author Virendra Pandey
* @date 2020-06-26
* @param {*} row
* @memberof SchedulingListComponent
*/
  public onDelete(row: any): void {
    let isDelete: boolean = confirm("Are sure you want to delete this exam schedule?");
    if (isDelete) {
      this._ens.deleteSchedule(row.id).subscribe(data => {
        this.getScheduledExamList();
      })
    }
  }

}
