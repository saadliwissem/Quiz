

export class choice{
        choice:string;
        istrue:boolean;
        img:string;
}
export class question{
        question:string;
        nbrAnswers:number;
        nbrcorrectAnswers:number;
        img:string;
        choice:choice[];

}
export class Language {
    
        name: string;
        version: number;
        nbrQuestions:number;
        passScore:number;
        description:string ;        
        imgsrc:string;
        category:string;
        question:question[];
}

