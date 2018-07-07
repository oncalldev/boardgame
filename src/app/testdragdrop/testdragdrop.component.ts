import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aas-testdragdrop',
  templateUrl: './testdragdrop.component.html',
  styleUrls: ['./testdragdrop.component.css']
})


 

export class TestdragdropComponent implements OnInit {
 
 
 dragSrcEl: HTMLElement;
 cols : NodeListOf<HTMLInputElement>;


  constructor() { }

  ngOnInit() {
    this.setEvents2();
  }

  setEvents() {


    this.cols = document.querySelectorAll('#columns .column');   

    for(let i=0; i < this.cols.length; i++) {

        //this.cols[i].addEventListener('dragstart', this.handleDragStart, false);
        this.cols[i].addEventListener('dragstart', () => {this.doDragStart(event, this.dragSrcEl);}, false)

        this.cols[i].addEventListener('dragenter', this.handleDragEnter, false);
        this.cols[i].addEventListener('dragover', this.handleDragOver, false);
        this.cols[i].addEventListener('dragleave', this.handleDragLeave, false);

        // this.cols[i].addEventListener('drop', this.handleDrop, false);
        this.cols[1].addEventListener('drop',() => {this.doDrop(event, this.dragSrcEl);}, false )

        //this.cols[i].addEventListener('dragend', this.handleDragEnd, false);
        this.cols[1].addEventListener('dragend',() => {this.doDragEnd(event, this.cols);}, false )
    };
  }

  setEvents2() {

    this.cols = document.querySelectorAll('#columns .column');  

    [].forEach.call(this.cols, function(col) {
      col.addEventListener('dragstart', () => {this.doDragStart(event, this.dragSrcEl);}, false);
      col.addEventListener('dragenter', this.handleDragEnter, false);
      col.addEventListener('dragover', this.handleDragOver, false);
      col.addEventListener('dragleave', this.handleDragLeave, false);
      col.addEventListener('drop', () => {this.doDrop(event, this.dragSrcEl);}, false);
      col.addEventListener('dragend', () => {this.doDragEnd(event, this.cols);}, false);
    });  
  }

  doDragStart(e, drg:HTMLElement){
    e.target.style.opacity = '0.4';  // this / e.target is the source node.

    drg = e.target;
    console.log('DoDragStart');
    console.log(drg);

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.innerHTML);
  }
  // REPLACES
      handleDragStart(e) {
        e.target.style.opacity = '0.4';  // this / e.target is the source node.
        
        this.dragSrcEl = e.target;
      
        console.log("DragStart");
        console.log(this.dragSrcEl);

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', e.target.innerHTML);
      
      }

  handleDragOver(e) {

    if (e.preventDefault) {
      e.preventDefault(); // Necessary. Allows us to drop.
    }

    e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.
    return false;
  }

  handleDragEnter(e) {
  // this / e.target is the current hover target.
    e.target.classList.add('over');
  }

  handleDragLeave(e) {
    e.target.classList.remove('over');  // this / e.target is previous target element.
  }
  doDrop(e, drg:HTMLElement) {
    if (e.stopPropagation) {
      e.stopPropagation(); // Stops some browsers from redirecting.
    }
  
    console.log("DoDrop_Before");
    console.log(drg);

  
    // Don't do anything if dropping the same column we're dragging.
  
    if (drg != e.target) {
      // Set the source column's HTML to the HTML of the column we dropped on.
      drg = e.target;
      console.log("DoDrop_After");
      console.log(drg);

      e.target.innerHTML = e.dataTransfer.getData('text/html');
    }
  
    return false;
  }
  //REPLACES
      handleDrop(e) {
      // this/e.target is current target element.

      if (e.stopPropagation) {
        e.stopPropagation(); // Stops some browsers from redirecting.
      }

      console.log("Drop");
      console.log(this.dragSrcEl);
      console.log(e.target);

      // Don't do anything if dropping the same column we're dragging.

      if (this.dragSrcEl != e.target) {
        // Set the source column's HTML to the HTML of the column we dropped on.
        this.dragSrcEl = e.target;
        e.target.innerHTML = e.dataTransfer.getData('text/html');
      }

      return false;
    }

  doDragEnd(e, cols:NodeListOf<HTMLInputElement>) {
    console.log("DoDragEnd");

    e.target.style.opacity = '1';
    for(let i=0; i < cols.length; i++) {
      this.cols[i].classList.remove('over');
    }
  }
  // REPLACES
      handleDragEnd(e) {
      // this/e.target is the source node.
        e.target.style.opacity = '1';
        for(let i=0; i < this.cols.length; i++) {
          this.cols[i].classList.remove('over');
        }
      };
}



// 

