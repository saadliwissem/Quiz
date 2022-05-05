import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


export interface Element {
  name: string;
  id: number;
  note: string;
  cin:number;
  
}


const DATA: Element[] = [
  {id: 1, name: 'mohamed',cin:12812828 , note: "student note" },
  {id: 2, name: 'ali',cin: 12812828, note: "student note"  },
  {id: 3, name: 'wissem',cin: 12812828, note: "student note"  },
  {id: 4, name: 'kadhem',cin:12812828 , note: "student note" },
  {id: 5, name: 'sobhi',cin:12812828 , note: "student note" },
  {id: 6, name: 'haider',cin:12812828 , note: "student note" },
  {id: 7, name: 'walid',cin:12812828 , note: "student note"},
  {id: 8, name: 'fares',cin: 12812828, note: "student note"  },
  {id: 9, name: 'luli',cin: 12812828, note: "student note"},
  {id: 10, name: 'nurin',cin:12812828 , note: "student note"  },
];


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  Columns: string[] = ['id', 'name','cin', 'note'];
  dataa = new MatTableDataSource<Element>(DATA);

  constructor() { }

  ngOnInit() {
    this.dataa.paginator = this.paginator;
  }

}
