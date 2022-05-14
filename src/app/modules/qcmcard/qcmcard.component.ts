import { Component, OnInit } from '@angular/core';
import {MDCRipple } from '@material/ripple';

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
forms management, client-server communication, and more A suite of developer tools to help you develop, build, test, and update your code With Angular.`;
//


  constructor() { }

  ngOnInit(): void {
  }

}
const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});