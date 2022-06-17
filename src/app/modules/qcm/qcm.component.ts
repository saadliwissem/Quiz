import { Language } from '../../models/language.model';
import { Component, Input, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/language.service';
//qcm page





@Component({
  selector: 'app-qcm',
  templateUrl: './qcm.component.html',
  styleUrls: ['./qcm.component.scss']
})


export class QCMComponent implements OnInit {
  
 
  card:Language[]=[];
  constructor(private languageService : LanguageService) {
    
  }

  
  ngOnInit() {
    this.reviewlanguages()
    
  }
  reviewlanguages(){
    this.languageService.getLanguage()
    .subscribe({
      next: (data)=>{
        this.card=data;
        console.log(data);
      },
      error:(e)=>console.log(e)
    });
    
  }
}
