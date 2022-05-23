import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editone-language',
  templateUrl: './editone-language.component.html',
  styleUrls: ['./editone-language.component.scss']
})
export class EditoneLanguageComponent implements OnInit {
  answers=4;
  numberofanswers=Array(this.answers)
  constructor() { }

  ngOnInit(): void {
  }

}
