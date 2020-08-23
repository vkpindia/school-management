import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public highcharts: typeof Highcharts = Highcharts;
  public chartOptions = {
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
    series: [

      {
        name: 'Total Collections',
        data: [2000, 6000, 12000, 7000, 4000, 10000, 12000],
        color: '#417dfc'
      },
      {
        name: 'Fees Collection',
        data: [1000, 3000, 4000, 3000, 3000, 5000, 4000],
        color: '#ff0000'
      }
    ]
  };

  public drillDownColumnOption = {
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
        data: [
          {
            name: "Jan",
            y: 825000,
            drilldown: "Jan",
            color: '#40dfcd'
          },
          {
            name: "Feb",
            y: 700000,
            drilldown: "Feb",
            color: '#417dfc'
          },
          {
            name: "Mar",
            y: 500000,
            drilldown: "Mar",
            color: '#ffaa01'
          }
        ]
      }
    ],

  };

  public StudentsCharts = {
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
        name: 'Female Students',
        y: 45000,
        sliced: true,
        selected: true,
        color: '#417dfc'
      }, {
        name: 'Male Students',
        y: 105000,
        color: '#ffaa01'
      }]
    }]
  }
  constructor() { }

  ngOnInit(): void {
  }
}
