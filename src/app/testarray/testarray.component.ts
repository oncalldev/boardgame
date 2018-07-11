import { Component, OnInit } from '@angular/core';
import { uniq, sortedUniq } from 'lodash';


@Component({
  selector: 'aas-testarray',
  templateUrl: './testarray.component.html',
  styleUrls: ['./testarray.component.css']
})
export class TestarrayComponent implements OnInit {
  arr : number[] = [40,60,10,40,50,20,30,10,20,20,30];
  rows: number[];

  constructor() { }

  ngOnInit() {
    this.rows = uniq(this.arr).sort(); 
    console.log(this.rows);

  }


}
