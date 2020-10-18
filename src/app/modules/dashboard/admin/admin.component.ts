import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { DashboardService } from '../../../_services/dashboard.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public highcharts: typeof Highcharts = Highcharts;
  public totals: any;
  public earningChartData: any[];
  public expenseChartData: any[];
  public studentChartData: any[];
  public displayChart: boolean;

  public earningsChart: any;
  public expansesChart: any;
  public StudentsCharts: any;

  constructor(private ds: DashboardService) { }

  ngOnInit(): void {
    this.displayChart = false;
    this.getChartData();
  }

  /**
   * @description Method to get chart data
   * @author Virendra Pandey
   * @date 2020-10-17
   * @memberof AdminComponent
   */
  public getChartData(): void {
    this.ds.getAdminDashboard().subscribe(data => {
      if (data) {
        this.totals = data['totals'];
        this.earningChartData = data['earningscharts'];
        this.expenseChartData = data['expenseschart'];
        this.studentChartData = data['studentschart'];

        if (this.earningChartData && this.earningChartData.length) {
          this.earningsChart = {
            chart: {
              type: 'areaspline'
            },
            title: {
              text: ''
            },
            subtitle: {
              style: {
                position: 'absolute',
                right: '0px',
                bottom: '10px'
              }
            },
            legend: {
              layout: 'vertical',
              align: 'left',
              verticalAlign: 'top',
              x: -150,
              y: 100,
              floating: true,
              borderWidth: 1,

              backgroundColor: (Highcharts.defaultOptions.legend.backgroundColor) ||
                '#FFFFFF'
            },
            xAxis: {
              categories: ['Mon', 'Tue', 'Wed', 'Thu',
                'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              title: {
                text: ''
              }
            },
            tooltip: {
              shared: true, valuePrefix: '₹'
            },
            plotOptions: {
              area: {
                fillOpacity: 1
              }
            },
            credits: {
              enabled: false
            },
            series: this.earningChartData
          };
        }
        if (this.expenseChartData && this.expenseChartData.length) {
          this.expansesChart = {
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
                name: "Expenses(millions)",
                colorByPoint: true,
                data: this.expenseChartData
              }
            ],
          };
        }
        if (this.studentChartData && this.studentChartData.length) {
          this.studentChartData.map((series, index) => {
            if (index === 0) {
              series['sliced'] = true;
              series['selected'] = true;
            }
            return series;
          });
          this.StudentsCharts = {
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
              data: this.studentChartData
            }]
          };
          // this.StudentsCharts.series[0].data = this.studentChartData;
          // console.log('this.studentChartData', this.StudentsCharts);
        }
      }
    });
    // this.displayChart = true;
  }
}
