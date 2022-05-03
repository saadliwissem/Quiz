import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() data=[];
  @Input() label:string;
  @Input() total:string;
  @Input() percentage:string;
  
  Highcharts=Highcharts;
  chartOptions={}
  constructor() { }

  ngOnInit() {
    this.chartOptions={
      chart: {
        type: 'areaspline',
        backgroundcolor:null,
        borderwidth:0,
        margin:[2,2,2,2],
        height:60,



    },
    title: {
        text: null
    },
    legend: {
      enabled: false,
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
            'Sunday',
            
        ],
        lables:{
          enable:false
        },
        title:{
          text:null
        },
        startOnTick:false,
        endOnTick:false,
        tickOptions:[],
        plotBands: [{ // visualize the weekend
            from: 4.5,
            to: 6.5,
            color: 'rgba(68, 170, 213, .2)'
        }]
    },
    yAxis: {


      lables:{
        enable:false
      },
      title:{
        text:null
      },
      startOnTick:false,
      endOnTick:false,
      tickOptions:[],

    },
    tooltip: {
        shared: true,
        outside:true
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
      enabled:false
    },
    series: [{
      data:this.data
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
