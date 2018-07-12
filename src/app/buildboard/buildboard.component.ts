import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Box } from '../models/box';
import { uniq, uniqBy, sortedUniq } from 'lodash';

export class Offset {
  offsetTop : number;
  offsetLeft : number;
}

export class xBox {
  id: string;
  offsetTop: number;
  offsetLeft: number;
  offsetHeight: number;
  offsetWidth: number;
  row: number;
  col: number;
  bgColor: string;
  northId: string;
  eastId: string;
  southId: string;
  westId: string;
}

// interface Array<T> {
//   unique() : Array<T>;
// }

@Component({
  selector: 'aas-buildboard',
  templateUrl: './buildboard.component.html',
  styleUrls: ['./buildboard.component.css']
})



export class BuildboardComponent implements OnInit {
  boxes: xBox[] = new Array(100);
  bgDefaultColor: string = "lightgrey";
  bgHighLightColor : string = "red";
  red: string = "red";
  green: string = "green";
  cols: number = 10;
  rows: number = 10;

  rowlist: number[];
  collist: number[];

  rowMax: number;
  colMax: number;

  selectedBGColor: string = "grey";
  nonselectedBGColor:string = "lightgrey";
  adjBGColor:string = "pink";

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.initBoxOffsets();
    this.generateOffsets(this.boxes);
    this.setRowsCols(this.boxes);
    this.initRowsCols(this.boxes);
  }
  
  initBoxOffsets() {

    var divList = document.getElementsByClassName('box');
    //console.log(divList.length);

    for (let i=0; i<divList.length; i++)
    {
      var element = divList[i] as HTMLElement;

      this.boxes[i] = {
        id:element.id, 
        offsetHeight:element.offsetHeight,
        offsetLeft:element.offsetLeft,
        offsetTop:element.offsetTop,
        offsetWidth:element.offsetWidth,
        bgColor:this.nonselectedBGColor,
        row: null,
        col: null,
        eastId:null,
        northId:null,
        westId:null,
        southId:null
      };

    }
  }

  toggleColor(event) {

    var boxId = Number(event.target.id);
    
    if (this.boxes[boxId].bgColor == this.selectedBGColor)
      {this.boxes[boxId].bgColor = this.nonselectedBGColor}
    else {
      this.boxes[boxId].bgColor = this.selectedBGColor;
    }

    this.setAdjacentBoxes(this.boxes[boxId]);
    this.setAdjacentColor(this.boxes[boxId], this.adjBGColor);
    console.log(this.boxes[boxId]);

  }

  toggleRow(event) {
      var thisbox = this.boxes[Number(event.target.id)];
      var newArray : xBox[] = this.boxes.filter ( function (el ) {
        return el.row == thisbox.row;
      });

      for (let element of newArray){
        element.bgColor = this.selectedBGColor;
      }

  }

  toggleCol(event) {
    var thisbox = this.boxes[Number(event.target.id)];
    var newArray : xBox[] = this.boxes.filter ( function (el ) {
      return el.col == thisbox.col;
    });

    for (let element of newArray){
      element.bgColor = this.selectedBGColor;
    }

}  

  setAdjacentBoxes(selectedBox:xBox)
  {
    var northBox : xBox;
    var northBoxId : number;

    var westBox : xBox;
    var westBoxId : number;

    var southBox: xBox;
    var southBoxId : number;    
    
    var eastBox : xBox;
    var eastBoxId : number;

    var currentBoxId : number = Number(selectedBox.id);

    var adjElement : HTMLElement;

    // North Box
    northBoxId = currentBoxId - this.rows;
    if (northBoxId < 0) {
      northBoxId = null;
    } else
    {
      adjElement= document.getElementById(northBoxId.toString()) as HTMLElement;
      if (adjElement == null) {
        northBoxId = null;
      }
    }

    // West Box
    westBoxId = currentBoxId - 1;
    adjElement = document.getElementById(westBoxId.toString()) as HTMLElement;
    if (adjElement == null) {
      westBoxId = null;
    } else {
      if (selectedBox.offsetTop != adjElement.offsetTop) {
        westBoxId = null;
      }
    }

    // South Box
    southBoxId = currentBoxId + this.rows;
    adjElement= document.getElementById(southBoxId.toString()) as HTMLElement;
    if (adjElement == null) {
      southBoxId = null;
    } else {
      if(selectedBox.offsetLeft != adjElement.offsetLeft){
        southBoxId = null;
      }
    }

    // East Box
    eastBoxId = currentBoxId + 1;
    adjElement = document.getElementById(eastBoxId.toString()) as HTMLElement;
    if (adjElement == null) {
      eastBoxId = null;
    } else {
      if (selectedBox.offsetTop != adjElement.offsetTop) {
        eastBoxId = null;
      }
    }
    
    selectedBox.northId = (northBoxId == null ? null : northBoxId.toString() );
    selectedBox.eastId = (eastBoxId == null ? null : eastBoxId.toString() );
    selectedBox.southId = (southBoxId == null ? null : southBoxId.toString() );
    selectedBox.westId = (westBoxId == null ? null : westBoxId.toString() );

  }

  setAdjacentColor(selectedBox:xBox, adjColor:string) {
    if(selectedBox.northId != null) {
      (this.boxes[selectedBox.northId].bgColor = adjColor);
    }

    if(selectedBox.eastId != null) {
      (this.boxes[selectedBox.eastId].bgColor = adjColor);
    }    

    if(selectedBox.southId != null) {
      (this.boxes[selectedBox.southId].bgColor = adjColor);
    }

    if(selectedBox.westId != null) {
      (this.boxes[selectedBox.westId].bgColor = adjColor);
    }
  }

  generateOffsets(boxes : xBox[])
  {
    let offsets : Offset[] = [];
    for (let box of boxes) {
        offsets.push({offsetLeft:box.offsetLeft, offsetTop:box.offsetTop});
    }
    console.log(offsets);
  }
  
  setRowsCols(boxes : xBox[]){
    this.rowlist = this.buildRows(uniqBy(boxes, 'offsetLeft').sort(this.compare_left));
    this.collist = this.buildCols(uniqBy(boxes, 'offsetTop').sort(this.compare_top));
    this.rowMax = this.rowlist.length - 1;
    this.colMax = this.collist.length - 1;
  }

  initRowsCols(boxes : xBox[]){
    for (let box of boxes){
      box.col = this.rowlist.indexOf(box.offsetLeft);
      box.row = this.rowlist.indexOf(box.offsetTop);
    }
    console.log(this.boxes);
  }

  compare_left(a:Offset,b:Offset) {
    if (a.offsetLeft < b.offsetLeft)
      return -1;
    if (a.offsetLeft > b.offsetLeft)
      return 1;
    return 0;
  }

  compare_top(a:Offset,b:Offset) {
    if (a.offsetTop < b.offsetTop)
      return -1;
    if (a.offsetTop > b.offsetTop)
      return 1;
    return 0;
  }

  buildRows(sortedleft : Offset[]) : number[] {
    var rows : number[] = [];

    for (let entry of sortedleft){
        rows.push(entry.offsetLeft);
    }
    return rows;
  }

  buildCols(sortedtop : Offset[]) : number[] {
    var cols : number[] = [];

    for (let entry of sortedtop){
      cols.push(entry.offsetTop);
    }
    return cols;
  }

  mouseDown(event) {
    console.log(document.getElementById(event.target.id));
  }

  mouseUp(event) {
    console.log(document.getElementById(event.target.id));
  }

  // Array.prototype.unique = function() {
  
  // }

  testUnique(event) {
    // Array.prototype.unique = function()
    // {
    //     var tmp = {}, out = [];
    //     for(var i = 0, n = this.length; i < n; ++i)
    //     {
    //         if(!tmp[this[i]]) { tmp[this[i]] = true; out.push(this[i]); }
    //     }
    //     return out;
    // }
    
    // var a = [1,2,2,7,4,1,'a',0,6,9,'a'];
    // var b = a.unique();
    // alert(a);
    // alert(b);    
  }
}

