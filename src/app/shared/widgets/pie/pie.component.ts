import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {
  @Input() data = [];
  Highcharts=Highcharts;
  chartOptions={}
  constructor() { }

  ngOnInit() {
    this.chartOptions={
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'percentage of student successfully passed the exam '
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
          point: {
              valueSuffix: '%'
          }
      },
      exporting:{
        enabled:true,
      },
      credits:{
        enabled:false,
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              //colors: pieColors,
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                  distance: -50,
                  filter: {
                      property: 'percentage',
                      operator: '>',
                      value: 4
                  }
              }
          }
        },
        series: [{
            name: 'successfully passed by',
            data: this.data
        }]
    };
    HC_exporting(Highcharts);
   setTimeout(()=>{
      window.dispatchEvent(
        new Event("resize")
      );
    },1)
  }

}
