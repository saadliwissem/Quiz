import { Component, OnInit,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodElement {
  name: string;
  id: number;
  note: string;
  cin:number;
  action:number;
}
const ELEMENTs_DATA: PeriodElement[] = [
  {id: 1, name: 'mohamed',cin:12712727 , note: "student note",action:1 },
  {id: 2, name: 'ali',cin: 12712727, note: "student note"  ,action:1},
  {id: 3, name: 'wissem',cin: 12712727, note: "student note",action:1  },
  {id: 4, name: 'kadhem',cin:12712727 , note: "student note",action:1 },
  {id: 5, name: 'sobhi',cin:12712727 , note: "student note" ,action:1},
  {id: 6, name: 'haider',cin:12712727 , note: "student note" ,action:1},
  {id: 7, name: 'walid',cin:12712727 , note: "student note",action:1},
  {id: 8, name: 'fares',cin: 12712727, note: "student note"  ,action:1},
  {id: 9, name: 'luli',cin: 12712727, note: "student note",action:1},
  {id: 10, name: 'nurin',cin:12712727 , note: "student note"  ,action:1},
];


@Component({
  selector: 'app-students-note',
  templateUrl: './students-note.component.html',
  styleUrls: ['./students-note.component.scss']
})
export class StudentsNoteComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginateur: MatPaginator;
  displayColumns: string[] = ['id', 'name','cin', 'note','action'];
  SourceData = new MatTableDataSource<PeriodElement>(ELEMENTs_DATA);


  constructor() { }

  ngOnInit() {
    this.SourceData.paginator = this.paginateur;
  }

}
