
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import{choice, Language,question} from "./models/language.model";

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  questions:question[];
  constructor(private http:HttpClient) {
   }
   uri:String="http://localhost:3000/api";
   private  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
    })
  };

 //get all languages
  getLanguage() :Observable<Language[]> {
    const url =`${this.uri}/languages`;
    return this.http
    .get<Language[]>(url);
  }
  //get id 
  /*getid(data:any): Observable<any>{
    return data.id;
  }
  //create
  create(data: any): Observable<any> {
    const url =`${this.uri}/languages`;
    return this.http.post(url, data);
  }*/
  //delete language
  deletelanguage(id: string): Observable<any> {
    return this.http.delete(`${this.uri}/languages/${id}`);
  }
  //add choices
  public addchoices(choice:choice):Observable<choice[]>{
    const url: string = `${this.uri}/languages`;
    const choiceparams = new HttpParams({
      fromObject:{
        choice:choice.choice,
        istrue:choice.istrue,
        img:choice.img,
        
        
      }
    });
    return this.http.post<choice[]>(url,choiceparams,this.httpOptions);
    
  }
  //add languaage
  public addLanguage(language:Language):Observable<Language>{
    const url: string = `${this.uri}/languages`;
    const params = new HttpParams({
      fromObject: { name : language.name,
        description : language.description,
        version:language.version,
        nbrQuestions:language.nbrQuestions,
        imgsrc:language.imgsrc,
        passScore:language.passScore,
        category:language.category,
        question:[]
      }
    });
    return this.http.post<Language>(url,params,this.httpOptions);

  }
  //add questions
public addquestions(question:question,choice:choice):Observable<question[]>{
  const url: string = `${this.uri}/languages`;
  const questionparams = new HttpParams({
    fromObject:{
      question:question.question,
      nbrAnswers:question.nbrAnswers,
      img:question.img,
      nbrcorrectAnswers: question.nbrcorrectAnswers,
      choice:this.addchoices(choice).toString()
    }
  });
  return this.http.post<question[]>(url,questionparams,this.httpOptions);
  
}

  getlanguageById(id){
    this.http.get(`${this.uri}/languages/${id}`);
  }


  /*addlanguage(name,version,description,nbrQuestions,passScore,imgsrc,category,question,id){
    const language:Language={
      
      name:name,
      version:version,
      description:description,
      nbrQuestions,
      imgsrc:imgsrc,
      passScore:passScore,
      category:category,
      question:question
    };
    return this.http.post(`${this.uri}/languages/addlanguage`,language);
    
  }*/
  updaetanguage(id,Lname,lversion,description,subtitle,imgsrc,status){
    const language={
      name:Lname,
      version:lversion,
      description:description,
      subtitle:subtitle,
      imgsrc:imgsrc,
      status:status

    };
    return this.http.post(`${this.uri}/languages/updatelanguage/${id}`,language);
    
  }
  deleteLanguage(id){
    return this.http.get(` ${this.uri}/languages/deletelanguage/${id}`);
  }

}
