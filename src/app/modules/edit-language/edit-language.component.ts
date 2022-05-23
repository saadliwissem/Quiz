import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-edit-language',
  templateUrl: './edit-language.component.html',
  styleUrls: ['./edit-language.component.scss'],
})
export class EditLanguageComponent implements OnInit {
  amountofquestions=12
  Arrayamountofquestions=Array(this.amountofquestions)
  
  constructor() {

  }
  ngOnInit(): void {}

}
