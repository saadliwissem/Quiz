
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { LanguageService } from 'src/app/language.service';
import{Language,question,choice} from '../../models/language.model'

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
  options = [2,10,20,25,30,35,40];
  panelOpenState = false;
  language:Language;
  question:question;
  choice:choice;

  constructor(private LanguageService:LanguageService,private _formBuilder: FormBuilder ) {}

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
  addlanguage(){
    this.LanguageService.addLanguage(this.language,this.question,this.choice).subscribe({
      next: (data)=>{
        this.language=data;
        console.log(data);
      },
      error:(e)=>console.log(e)
    })
  }
}
