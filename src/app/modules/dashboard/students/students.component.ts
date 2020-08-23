import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Router, ActivatedRoute } from '@angular/router';
import { ExpenseService } from '../../../_services/expense.service';
import { EventNotificationService } from '../../../_services/event-notification.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) TSort: MatSort;

  public highcharts: typeof Highcharts = Highcharts;

  public displayedColumns: string[] = ['expensetype', 'amount', 'pendingamount', 'status', 'description', 'actions'];
  public filterData: string = '';
  public recordLength: number;
  public isLoading: boolean = true;
  public expenseList: MatTableDataSource<any>;
  public selection = new SelectionModel<any>(true, []);
  public showForm: boolean = false;
  public isCreate: boolean = false;

  public notificationList: any = [];
  public randomColor = ['#40dfcd', '#fbd540', '#f939a1'];
  public dateLbelBg: string;
  public colorCount: number = 0;
  public eventList: any = [];
  // tslint:disable-next-line: variable-name

  public attendanceCharts = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: ''
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
        showInLegend: false
      }
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'Students',
      colorByPoint: true,
      data: [{
        name: 'Present',
        y: 65.8,
        sliced: true,
        selected: true,
        color: '#ffaa01'
      }, {
        name: 'Absent',
        y: 28.2,
        color: '#417dfc'
      }]
    }]
  }
  constructor(private _es: ExpenseService, private _router: Router, private _activatedRout: ActivatedRoute, private _ens: EventNotificationService) { }

  ngOnInit(): void {
    // method call
    this.getexpenseList();
    if(this._activatedRout.routeConfig.path=='add'){
      this.showForm = true;
      this.isCreate = true;
      this.isLoading = false;
    }
    this.getnotificationList();
    this.getEventList();
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
   * @memberof ExpenseListComponent
   */
  public getexpenseList() {
    this._es.getExpenseList().subscribe((data: any) => {
      console.log('parent data', data);
      if (data) {
        this.recordLength = data.length;
        this.expenseList = new MatTableDataSource(data);
        this.expenseList.sort = this.TSort;
        this.expenseList.paginator = this.paginator;
        this.isLoading = false;
        // this.showForm = true;
      }
      // Assign the data to the data source for the table to render
      // this.expenseList = new MatTableDataSource(data);
    });
  }

    /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-16
   * @memberof NotificationListComponent
   */
  public getnotificationList() {
    this._ens.getAllList(false).subscribe(data => {
      if (data) {
        this.notificationList = data;
        this.notificationList.map(element => {
          element['dateLbelBg'] = this.randomColor[this.colorCount];
          this.colorCount++;
          if (this.colorCount > 2) {
            this.colorCount = 0;
          }
        });
      }
      this.isLoading = false;
    })
  }

    /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-16
   * @memberof EventsListComponent
   */
  public getEventList() {
    this._ens.getAllList(true).subscribe(data => {
      if (data) {
        this.eventList = data;
        this.eventList.map(element => {
          element['dateLbelBg'] = this.randomColor[this.colorCount];
          this.colorCount++;
          if (this.colorCount > 2) {
            this.colorCount = 0;
          }
        });
      }
      this.isLoading = false;
      // console.log('this.eventList', this.eventList);
    })
  }

  public onEventDelete(row){
   let isDeleyte:boolean = confirm("Are sure you want to delete this Event?");
   if(isDeleyte){
    this._ens.deleteEvent(row.id, true).subscribe(data=>{
      this.getEventList();
    })
   }
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @returns {boolean}
   * @memberof ExpenseListComponent
   */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.expenseList.data.length;
    return numSelected === numRows;
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @memberof ExpenseListComponent
   */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.expenseList.data.forEach(row => this.selection.select(row));
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @param {*} [row]
   * @returns {string}
   * @memberof ExpenseListComponent
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
   * @memberof ExpenseListComponent
   */
  applyFilter(event: Event) {
    // console.log('list filter event', event);
    const filterValue = (event.target as HTMLInputElement).value;
    this.expenseList.filter = filterValue.trim().toLowerCase();
    // console.log('this.expenseList', this.expenseList);
    if (this.expenseList.paginator) {
      this.expenseList.paginator.firstPage();
    }
  }

      /**
     * @description Method to route on edit page
     * @author Virendra Pandey
     * @date 2020-06-26
     * @param {*} row
     * @memberof ExpenseListComponent
     */
    public onDelete(row:any): void {
      console.log('row', row);
      let isDelete:boolean = confirm("Are sure you want to delete this expense?");
      if(isDelete){
        this._es.deleteExpense(row.id).subscribe(data=>{
            this.getexpenseList();
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
   * @memberof ExpenseListComponent
   */
  public onEdit(row): void {
    console.log('row', row);
    this._router.navigate(['edit', row.id], { relativeTo: this._activatedRout });
  }
}
