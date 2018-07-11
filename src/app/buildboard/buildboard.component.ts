import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Box } from '../models/box';

export class xBox {
  id: string;
  offsetTop: number;
  offsetLeft: number;
  offsetHeight: number;
  offsetWidth: number;
  bgColor: string;
  northId: string;
  eastId: string;
  southId: string;
  westId: string;
}

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

  selectedBGColor: string = "grey";
  nonselectedBGColor:string = "lightgrey";
  adjBGColor:string = "pink";

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.initBoxOffsets();
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
        eastId:null,
        northId:null,
        westId:null,
        southId:null
      };
      //console.log(this.boxes[i]);

    }

    //console.log(this.boxes);
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

  mouseDown(event) {
    console.log(document.getElementById(event.target.id));
  }

  mouseUp(event) {
    console.log(document.getElementById(event.target.id));
  }
}
