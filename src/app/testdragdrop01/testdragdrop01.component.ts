import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aas-testdragdrop01',
  templateUrl: './testdragdrop01.component.html',
  styleUrls: ['./testdragdrop01.component.css']
})


export class Testdragdrop01Component implements OnInit {
 
 
 dragSrcEl: HTMLElement;
 options : NodeListOf<HTMLInputElement>;
 boxes : NodeListOf<HTMLInputElement>;
 that: any;
 holdBGColor: string;

  constructor(
  ) { 
    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
  }

  ngOnInit() {
    this.that = this;
    this.setEvents();
  }

  setEvents() {
    console.log("setEvents");
    console.log(this);

    this.options = document.querySelectorAll('#draglist .dragoption');   

    for(let i=0; i < this.options.length; i++) {
        this.options[i].addEventListener('dragstart', this.handleDragStart, false);
        //this.options[i].addEventListener('dragenter', this.handleDragEnter, false);
        //this.options[i].addEventListener('dragover', this.handleDragOver, false);
        //this.options[i].addEventListener('dragleave', this.handleDragLeave, false);
        //this.options[i].addEventListener('drop', this.handleDrop, false);
        this.options[i].addEventListener('dragend', () => {this.handleDragEnd(event, this.options);}, false);
    };

    this.boxes = document.querySelectorAll('#boxes .box');    
    for(let i=0; i < this.boxes.length; i++) {
      //this.options[i].addEventListener('dragstart', this.handleDragStart, false);
      this.boxes[i].addEventListener('dragenter', this.handleDragEnter, false);
      this.boxes[i].addEventListener('dragover', this.handleDragOver, false);
      this.boxes[i].addEventListener('dragleave', this.handleDragLeave, false);
      this.boxes[i].addEventListener('drop', this.handleDrop, false);
      //this.options[i].addEventListener('dragend', () => {this.handleDragEnd(event, this.options);}, false);
  };

  }

  handleDragStart(e) {


    console.log("DragStart");

    e.target.style.opacity = '0.2';  // this / e.target is the source node.
    e.dataTransfer.setData('sourceId', e.srcElement.id);
    e.dataTransfer.effectAllowed = 'copy';
    e.dataTransfer.setData('text/html', e.target.innerHTML);
    this.holdBGColor = this.findBGColor(e.target.classList);
    e.dataTransfer.setData('bgColor', this.holdBGColor);
    //console.log(e);
  }


  findBGColor(colorList : string[]) : string {
    // will find the first background color in class list - assumes that it starts with bg
    for (let i=0; i< colorList.length; i++)
    {
      if(colorList[i].substring(0,2) == 'bg') {
        console.log("BGColor: ", colorList[i]);
        return colorList[1];
      }
    }
    return null;
  }

  removeBGColor(tgt : HTMLElement ){
    for (let i=0; i < tgt.classList.length; i++)
    {
      if(tgt.classList[i].substring(0,2) == 'bg') {
        tgt.classList.remove(tgt.classList[i]);
      }
    }
  }

  handleDragOver(e) {

    console.log("DragOver");
    if (e.preventDefault) {
      e.preventDefault(); // Necessary. Allows us to drop.
    }
    this.removeBGColor(e.target);

    e.target.innerHTML = e.dataTransfer.getData('text/html');
    e.target.classList.add(this.holdBGColor);
    //e.dataTransfer.dropEffect = 'copy';  // See the section on the DataTransfer object.
    
    //console.log(e);

    return false;
  }

  handleDragEnter(e) {
    console.log("DragEnter");
  // this / e.target is the current hover target.
    e.target.classList.add('over');
    //console.log(e);

  }

  handleDragLeave(e) {
    console.log("DragLeave");
    e.target.classList.remove('over');  // this / e.target is previous target element.

    //e.target.classList.add(e.dataTransfer.getData('bgColor'));  
    //console.log(e);
  }


  handleDrop(e) {
  // this/e.target is current target element.
  console.log("Drop");
  if (e.stopPropagation) {
    e.stopPropagation(); // Stops some browsers from redirecting.
  }
  this.removeBGColor(e.target);

  e.target.innerHTML = e.dataTransfer.getData('text/html');
  e.target.classList.add(this.holdBGColor);
  //e.target.classList.add(e.dataTransfer.getData('bgColor'));

  // if (this.dragSrcEl != e.target) {
  //   // Set the source column's HTML to the HTML of the column we dropped on.
  //   this.dragSrcEl = e.target;
  //   e.target.innerHTML = e.dataTransfer.getData('text/html');
  // }

  //console.log(e);

  return false;
}

  handleDragEnd(e, options:NodeListOf<HTMLInputElement>) {
    //console.log("DragEnd")
  // this/e.target is the source node.
    e.target.style.opacity = '1';
    for(let i=0; i < options.length; i++) {
      options[i].classList.remove('over');
    }

    //console.log(e);
  };

}



// 

