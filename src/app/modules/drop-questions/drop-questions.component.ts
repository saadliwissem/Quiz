import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drop-questions',
  templateUrl: './drop-questions.component.html',
  styleUrls: ['./drop-questions.component.scss']
})
export class DropQuestionsComponent implements OnInit {
  Anbq:number[];
  constructor() { }

  ngOnInit(): void {
  }
  printnbq(n:string){
    this.Anbq=Array(Number(n));
  }

}
