import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-studentsinfo',
  templateUrl: './studentsinfo.component.html',
  styleUrls: ['./studentsinfo.component.scss']
})
export class StudentsinfoComponent implements OnInit {
  @Input() bigcharts=[]; 
  Highcharts=Highcharts;

  chartOptions={};
  constructor() { }

  ngOnInit() {
    this.chartOptions={
      chart: {
          type: 'column'
      },
      title: {
          text: 'Number of students passed Quizes from different classes'
      },
      subtitle: {
        text: ''      },
      xAxis: {
          type: 'category',
          labels: {
              rotation: -45,
              style: {
                  fontSize: '13px',
                  fontFamily: 'Verdana, sans-serif'
              }
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Number of students '
          }
      },
      legend: {
          enabled: false
      },
      tooltip: {
          pointFormat: 'number of students passed Quizes: <b>{point.y:.0f} student</b>'
      },
      series: [{
          name: 'Population',
          data: [
              ['DSI', 24],
              ['RX', 20],
              ['MVW', 14],
              ['info1.1', 13],
              ['info1.2', 13],
             
          ],
          dataLabels: {
              enabled: true,
              rotation: -90,
              color: '#FFFFFF',
              align: 'right',
              format: '{point.y:.0f}', // no decimal
              y: 10, // 10 pixels down from the top
              style: {
                  fontSize: '13px',
                  fontFamily: 'Verdana, sans-serif'
              }
          }
      }]
  }
  HC_exporting(Highcharts);
 setTimeout(()=>{
    window.dispatchEvent(
      new Event("resize")
    );
  },300)
  }

}
