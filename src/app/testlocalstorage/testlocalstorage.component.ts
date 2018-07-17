import { Component, OnInit } from '@angular/core';
import { ObjectUnsubscribedError } from '../../../node_modules/rxjs';

export class test {
  id: string;
  name: string;
}

@Component({
  selector: 'aas-testlocalstorage',
  templateUrl: './testlocalstorage.component.html',
  styleUrls: ['./testlocalstorage.component.css']
})
export class TestlocalstorageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.storeInLocalStorage();
  }

  storeInLocalStorage() {
    let objs: test[] = [{id:"01", name:"BG"},{id:"02", name:"XY"}];
    console.log(objs);
    localStorage.setItem( "obj", "ABC" );
  }
}
