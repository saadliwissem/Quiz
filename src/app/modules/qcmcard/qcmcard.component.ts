
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit,Input } from '@angular/core';
import { LanguageService } from 'src/app/language.service';



@Component({
  selector: 'app-qcmcard',
  templateUrl: './qcmcard.component.html',
  styleUrls: ['./qcmcard.component.scss']
})

export class QcmcardComponent implements OnInit {
  @Input() id:string;
  @Input() Lname:string; 
  @Input() lversion:String;
  @Input() nbrQuestion:number;
  @Input() passScore:String;
  @Input() description:string;
  @Input() imgsrc:string;
  @Input() category:string;
  constructor( private languageService : LanguageService,
                private route:ActivatedRoute,
                private router:Router) { }
  ngOnInit(): void {
  }
  deletelanguage(): void {
    this.languageService.deletelanguage(this.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          
          this.router.navigate(['/qcm']);
        },
        error: (e) => console.error(e)
      });
  }

}