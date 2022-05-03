import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  @Input() bigcharts=[]; 
  Highcharts=Highcharts;

  chartOptions={};

  constructor() { }

  ngOnInit() {
  this.chartOptions={
    chart: {
      type: 'areaspline'
  },
  title: {
      text: 'Quiz passed during one week '
  },
  legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 150,
      y: 100,
      floating: true,
      borderWidth: 1,
      /*backgroundColor:
          Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'*/
  },
  xAxis: {
      categories: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
      ],
      plotBands: [{ // visualize the weekend
          from: 4.5,
          to: 6.5,
          color: 'rgba(68, 170, 213, .2)'
      }]
  },
  yAxis: {
      title: {
          text: 'Quiz units'
      }
  },
  tooltip: {
      shared: true,
      valueSuffix: ' Quiz'
  },
  credits: {
      enabled: false
  },
  plotOptions: {
      areaspline: {
          fillOpacity: 0.5
      }
  },
  
  exporting:{
    enabled:true
  },
  series: this.bigcharts
  };
  HC_exporting(Highcharts);
 setTimeout(()=>{
    window.dispatchEvent(
      new Event("resize")
    );
  },300)
  }

}
