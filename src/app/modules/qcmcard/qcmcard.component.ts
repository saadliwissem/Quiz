import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qcmcard',
  templateUrl: './qcmcard.component.html',
  styleUrls: ['./qcmcard.component.scss']
})
export class QcmcardComponent implements OnInit {
//read more/less button
isReadMore = true;
showText() {
  this.isReadMore = !this.isReadMore
}


readMore = false;
longText = `Angular is a development platform, built on TypeScript. As a platform, Angular includes: A component-based framework for building scalable web applications A collection of well-integrated libraries that cover a wide variety of features, including routing,
forms management, client-server communication, and more A suite of developer tools to help you develop, build, test, and update your code With Angular, you're taking advantage of a platform that can scale from single-developer projects
to enterprise-level applications. Angular is designed to make updating as straightforward as possible, so take advantage of the latest developments with a minimum of effort. Best of all, the Angular ecosystem consists of a diverse group
of over 1.7 million developers, library authors, and content creators.`;
//
  constructor() { }

  ngOnInit(): void {
  }

}
