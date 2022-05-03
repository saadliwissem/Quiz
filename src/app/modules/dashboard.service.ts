import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }
  bigchart(){
    return[{
      name: 'Java',
      data: [3, 4, 3, 5, 3, 10, 12]
  }, {
      name: 'angular',
      data: [1, 3, 4, 3, 3, 5, 4]
  },{
    name: 'React',
    data: [6, 5, 2, 1, 3, 0, 0]
  },{
    name: 'JavaScript',
    data: [7, 2, 10, 3, 3, 4, 12]
  },{
    name: 'bootstrap',
    data: [0, 2, 5, 6, 3, 10, 0]
  }];
  }
  cards(){
    return[3,4,5,6,0,0,0,5]
  }
  datapie(){
    return [
      { name: 'Java', y: 61.41 },
      { name: 'angular', y: 11.84 },
      { name: 'React', y: 10.85 },
      { name: 'Javascript', y: 4.67 },
      { name: 'bootsrtap', y: 4.18 },
      { name: 'Other', y: 7.05 }
  ]
  }
}
