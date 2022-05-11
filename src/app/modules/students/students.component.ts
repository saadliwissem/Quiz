import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


export interface Element {
  name: string;
  id: number;
  class: string;
  cin:number;
  qp:number;
  qf:number;

  
}


const DATA: Element[] = [
  {id: 1, name: 'mohamed',cin:12812828 , class: "DSI",qp:0,qf:0 },
  {id: 2, name: 'ali',cin: 12812828, class: "MDW",qp:0,qf:0  },
  {id: 3, name: 'wissem',cin: 12812828, class: "RX" ,qp:0,qf:0 },
  {id: 4, name: 'kadhem',cin:12812828 , class: "DSI" ,qp:0,qf:0},
  {id: 5, name: 'sobhi',cin:12812828 , class: "RX" ,qp:0,qf:0},
  {id: 6, name: 'haider',cin:12812828 , class: "MDW" ,qp:0,qf:0},
  {id: 7, name: 'walid',cin:12812828 , class: "RX",qp:0,qf:0},
  {id: 8, name: 'fares',cin: 12812828, class: "MDW" ,qp:0,qf:0 },
  {id: 9, name: 'luli',cin: 12812828, class: "RX",qp:0,qf:0},
  {id: 10, name: 'nurin',cin:12812828 , class: " RX",qp:0,qf:0  },
];


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  Columns: string[] = ['id', 'name','cin', 'class','qp','qf'];
  dataa = new MatTableDataSource<Element>(DATA);

  constructor() { }

  ngOnInit() {
    this.dataa.paginator = this.paginator;
  }

}
