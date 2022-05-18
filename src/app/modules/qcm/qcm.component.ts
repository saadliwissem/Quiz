import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

//qcm page

export interface PeriodElement {
  name: string;
  id_language: number;
  language_rate: number;
  action: any;
}
export interface cards {
  Lname: string;
  lversion: number;
  subtitle: String;
  description:String ;
}
const ELEMENTs_DATA: PeriodElement[] = [
  {id_language: 1, name: 'java', language_rate: 3,action:1 },
  {id_language: 2, name: 'javaScript', language_rate: 4.5,action:1 },
  {id_language: 3, name: 'Bootstrap', language_rate: 5,action:1  },
  {id_language: 4, name: 'angular', language_rate: 3 ,action:1},
  {id_language: 5, name: 'ada', language_rate: 4.5,action:1},
  {id_language: 6, name: 'html 5', language_rate: 5 ,action:1},
  {id_language: 7, name: 'css', language_rate: 3,action:1},
  {id_language: 8, name: 'SpringBoot', language_rate: 4.5,action:1 },
  {id_language: 9, name: 'SQL', language_rate: 5,action:1},
  {id_language: 10, name: 'mongoDB', language_rate: 3,action:1  },
];

@Component({
  selector: 'app-qcm',
  templateUrl: './qcm.component.html',
  styleUrls: ['./qcm.component.scss']
})


export class QCMComponent implements OnInit {
  
  @ViewChild(MatPaginator, { static: true }) paginateur: MatPaginator;
  displayColumns: string[] = ['id_language', 'name', 'language_rate', 'action'];
  SourceData = new MatTableDataSource<PeriodElement>(ELEMENTs_DATA);

  card:cards[]=[
    {Lname:"java",lversion:17,subtitle:"esay",description:"beacoup du text "},
    {Lname:"bootstrap",lversion:4,subtitle:"subtitle",description:"quelque text"},
    {Lname:"java",lversion:5,subtitle:"subtitle",description:"quelque text"},
    {Lname:"java",lversion:17,subtitle:"esay",description:"beacoup du text "}
];
  constructor() {}


  ngOnInit() {
    this.SourceData.paginator = this.paginateur;





  }



  
  
}
