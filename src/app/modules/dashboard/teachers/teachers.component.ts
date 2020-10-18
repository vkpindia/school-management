import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { StudentsService } from '../../../_services/students.service';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { EventNotificationService } from '../../../_services/event-notification.service';
import * as Highcharts from 'highcharts';
import { DashboardService } from '../../../_services/dashboard.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) TSort: MatSort;

  public highcharts: typeof Highcharts = Highcharts;

  public displayedColumns: string[] = ['select', 'rollnumber', 'enrolnumber', 'name', 'sex', 'section', 'dob', 'mobilenumber', 'actions'];
  public filterData: string = '';
  public recordLength: number;
  public isLoading: boolean = true;
  public studentList: MatTableDataSource<any>;
  public selection = new SelectionModel<any>(true, []);

  public notificationList: any = [];
  public randomColor = ['#40dfcd', '#fbd540', '#f939a1'];
  public dateLbelBg: string;
  public colorCount: number = 0;

  public salaryChart: any;
  public attendanceCharts: any;
  public totals: any;
  // tslint:disable-next-line: variable-name
  constructor(
    private ds: DashboardService,
    private _ss: StudentsService,
    private _router: Router,
    private _activatedRout: ActivatedRoute,
    private _ens: EventNotificationService) { }

  ngOnInit(): void {
    // method call
    this.getStudentList();
    this.getnotificationList();
    this.getTeacherDashboard();
  }

  /*  ngAfterViewInit() {
     this.TSort.sortChange.subscribe(() => {
         this.paginator.pageIndex = 0;
         this.paginator.pageSize = this.pageSize;
     }); */
  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-10-18
   * @memberof TeachersComponent
   */
  public getTeacherDashboard(): void {
    this.ds.getTeacherDashboard(JSON.parse(localStorage.getItem('currentUser')).id).subscribe(data => {
      this.totals = data['teachertotals'];
      if (data['salarychart'] && data['salarychart'].length) {
        this.salaryChart = {
          chart: {
            type: 'column'
          },
          title: {
            text: ''
          },
          subtitle: {
            text: ''
          },
          accessibility: {
            announceNewData: {
              enabled: true
            }
          },
          xAxis: {
            type: 'category'
          },
          yAxis: {
            title: {
              text: ''
            }

          },
          legend: {
            enabled: false
          },
          plotOptions: {
            series: {
              borderWidth: 0,
              dataLabels: {
                enabled: true,
                format: '{point.y:.1f}'
              }
            }
          },

          tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>'
          },
          credits: {
            enabled: false
          },
          series: [
            {
              name: "Salary(millions)",
              colorByPoint: true,
              data: data['salarychart']
            }
          ],
        };
      }
      if (data['attandancechart'] && data['attandancechart'].length) {
        this.attendanceCharts = {
          chart: {
            type: 'column'
          },
          title: {
            text: ''
          },
          subtitle: {
            text: ''
          },
          accessibility: {
            announceNewData: {
              enabled: true
            }
          },
          xAxis: {
            type: 'category'
          },
          yAxis: {
            title: {
              text: ''
            }

          },
          legend: {
            enabled: false
          },
          plotOptions: {
            series: {
              borderWidth: 0,
              dataLabels: {
                enabled: true,
                format: '{point.y:.1f}'
              }
            }
          },

          tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}</b> of total<br/>'
          },
          credits: {
            enabled: false
          },
          series: [
            {
              name: "Attendance(percentage)",
              colorByPoint: true,
              data: data['attandancechart']
            }
          ],
        };
      }
    });
  }
  /**
   * @description Method to get All student record
   * @author Virendra Pandey
   * @date 2020-06-24
   * @memberof StudentsListComponent
   */
  public getStudentList() {
    this._ss.getAllStudents().subscribe((data: any) => {
      console.log('data', data);
      if (data) {
        this.recordLength = data.length;
        this.studentList = new MatTableDataSource(data);
        this.studentList.sort = this.TSort;
        this.studentList.paginator = this.paginator;
        this.isLoading = false;
      }
      // Assign the data to the data source for the table to render
      // this.studentList = new MatTableDataSource(data);
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
    });
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @returns {boolean}
   * @memberof StudentsListComponent
   */
  isAllSelected() {
    if (this.studentList && this.recordLength) {
      const numSelected = this.selection.selected.length;
      const numRows = this.studentList.data.length;
      return numSelected === numRows;
    }
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @memberof StudentsListComponent
   */
  masterToggle() {
    if (this.studentList && this.recordLength) {
      this.isAllSelected() ?
        this.selection.clear() :
        this.studentList.data.forEach(row => this.selection.select(row));
    }
  }

  /**
   * @description
   * @author Virendra Pandey
   * @date 2020-07-03
   * @param {*} [row]
   * @returns {string}
   * @memberof StudentsListComponent
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
   * @memberof StudentsListComponent
   */
  applyFilter(event: Event) {
    // console.log('list filter event', event);
    const filterValue = (event.target as HTMLInputElement).value;
    this.studentList.filter = filterValue.trim().toLowerCase();
    // console.log('this.studentList', this.studentList);
    if (this.studentList.paginator) {
      this.studentList.paginator.firstPage();
    }
  }

  /**
   * @description Method to route on edit page
   * @author Virendra Pandey
   * @date 2020-06-26
   * @param {*} row
   * @memberof StudentsListComponent
   */
  public onEdit(row): void {
    console.log('row', row);
    this._router.navigate(['edit', row.id], { relativeTo: this._activatedRout });
  }
}
