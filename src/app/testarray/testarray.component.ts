import { Component, OnInit } from '@angular/core';
import { uniq, uniqBy, sortedUniq } from 'lodash';

export class Offset {
  topoffset : number;
  leftoffset : number;
}

@Component({
  selector: 'aas-testarray',
  templateUrl: './testarray.component.html',
  styleUrls: ['./testarray.component.css']
})
export class TestarrayComponent implements OnInit {

  arrobjs : Offset[] = [
    {topoffset:50, leftoffset:45},      
    {topoffset:50, leftoffset:5},
    {topoffset:50, leftoffset:25},
    {topoffset:10, leftoffset:5},
    {topoffset:10, leftoffset:25},
    {topoffset:10, leftoffset:45},
    {topoffset:30, leftoffset:5},
    {topoffset:30, leftoffset:25},
    {topoffset:30, leftoffset:45}

  ];

  arr : number[] = [40,60,10,40,50,20,30,10,20,20,30];
  rows: number[];
  cols: number[];

  constructor() { }

  ngOnInit() {
    //this.rows = uniq(this.arr).sort(); 
    //console.log(this.arrobjs);
    //console.log(this.arrobjs.sort(this.compare));
    this.rows = this.buildRows(uniqBy(this.arrobjs, 'leftoffset').sort(this.compare_left));
    this.cols = this.buildCols(uniqBy(this.arrobjs, 'topoffset').sort(this.compare_top));
    console.log(this.rows);
    console.log(this.cols);
    //console.log(this.rows);
  }

  compare_left(a:Offset,b:Offset) {
    if (a.leftoffset < b.leftoffset)
      return -1;
    if (a.leftoffset > b.leftoffset)
      return 1;
    return 0;
  }

  compare_top(a:Offset,b:Offset) {
    if (a.topoffset < b.topoffset)
      return -1;
    if (a.topoffset > b.topoffset)
      return 1;
    return 0;
  }

  buildRows(sortedleft : Offset[]) : number[] {
    var rows : number[] = [];

    for (let entry of sortedleft){
        rows.push(entry.leftoffset);
    }
    return rows;
  }

  buildCols(sortedtop : Offset[]) : number[] {
    var cols : number[] = [];

    for (let entry of sortedtop){
      cols.push(entry.topoffset);
    }
    return cols;
  }


}
