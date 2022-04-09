import { Component, OnInit,EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarforme: EventEmitter <any> = new EventEmitter();
  constructor() { }

  ngOnInit() {}
  toggleSideBar(){
    this.toggleSideBarforme.emit();
  }

}
