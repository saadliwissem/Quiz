
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
  categories=['web','programmation','design','security'];
  selectedcategory:string;
  panelOpenState = false;
  questions=[];
  language:Language={
    '_id':"",
    name:"",
    description:'',
    version: 1,
    passScore:70,
    category:'',
    nbrQuestions:20,
    imgsrc:'',
    question:[]
  }
  question:question={
    question:'',
    nbrAnswers:2,
    nbrcorrectAnswers:1,
    img:'',
    choice:[]
  }
  choice:choice={
    choice:'',
    istrue:false,
    img:''
  };
  submitted=false;
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
    this.printedOption =Array(Number(this.language.nbrQuestions)) ;
    
  }
  try(){
    console.log(this.questions)
  }
 

  //add language
  /*savelanguage(): void {
    const data = {
      name: this.language.name,
      description: this.language.description,
      version: this.language.version,
      passScore:this.language.passScore,
      category:this.language.category,
      nbrQuestions:this.language.nbrQuestions,
      imgsrc:this.language.imgsrc,
      question:[]
    };

    this.LanguageService.create(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          console.log(res.id);
          this.submitted = true;
        },
        error: (e) => {
          console.log(e)
  }});
      this.nawlanguage();
  }
  nawlanguage():void{
    this.submitted=false;
    this.language={
      "_id":"",
      name:"",
    description:'',
    version: 1,
    passScore:70,
    category:'',
    nbrQuestions:1,
    imgsrc:'',
    question:[]
    }
  }*/
  puchquestions(){

  }
//add language
  addlanguage(){
    this.LanguageService.addLanguage(this.language).subscribe({
      next: (data)=>{
        console.log(data);
      },
      error:(e)=>console.log(e)
    })
  }
}