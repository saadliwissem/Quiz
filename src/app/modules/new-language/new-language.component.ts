import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-new-language',
  templateUrl: './new-language.component.html',
  styleUrls: ['./new-language.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})

export class NewLanguageComponent implements OnInit {
  x=50;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  selectedOption: string;
  printedOption: number[];
  options = [10,20,25,30,35,40];
  panelOpenState = false;$
  

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      seconddCtrl: ['', Validators.required],
      thirdCtrl: ['', Validators.required],
      fourthCtrl: ['', Validators.required],
      sixthCtrl: ['', Validators.required],
    });
    
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      fifthCtrl: ['', Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      seventhCtrl: ['', Validators.required],
      
    });
  }
 
  
  print() {
    this.printedOption =Array(Number(this.selectedOption)) ;
    
  }
}
