import { Component, OnInit,Input } from '@angular/core';



@Component({
  selector: 'app-qcmcard',
  templateUrl: './qcmcard.component.html',
  styleUrls: ['./qcmcard.component.scss']
})

export class QcmcardComponent implements OnInit {
  @Input() Lname:string; 
  @Input() lversion:String;
  @Input() nbrQuestion:number;
  @Input() passScore:String;
  @Input() description:string;
  @Input() imgsrc:string;
  @Input() category:string;
  
//read more/less button


  constructor() { }

  ngOnInit(): void {
  }

}