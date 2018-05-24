import { Component, OnInit } from '@angular/core';
import { squareService } from 'src/square.service';
import { Square } from 'src/square';


@Component({
  selector: 'aas-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  clickMessage : string = '';
  squares: Square[];
 
  constructor(private _squareService: squareService){}
  
  ngOnInit() {
    this.getSquares();
    }

  getSquares(): void {
    this._squareService.getSquares()
    .subscribe(squaresData => squares = squaresData); 
    console.log(this.squares);
  }
  
  doClick(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    console.log("target:", target);

    var idAttr = target.attributes.id;
    console.log("idAttr:", idAttr);

    var idClass = target.attributes.class;
    target.classList.add("red");
    
    console.log("idClass:", idClass);
  
    var value = idAttr.nodeValue;
    console.log("value:", value);
  
    var parent = target.parentElement;
    this.clickMessage = value;
  }

  addColor() {
    var x = document.getElementById("board");
    var y = x.getElementsByClassName("grid-item");
    var i;
    for (i = 0; i < y.length; i++) {
      if(y[i].id.indexOf("X") == 0)
        {
          y[i].classList.add("red");
        }
        
    }
  } 
  
  removeColor() {
    var x = document.getElementById("board");
    var y = x.getElementsByClassName("grid-item");
    var i;
    for (i = 0; i < y.length; i++) {
          y[i].classList.remove("red");        
    }
  }  
  
  targetCard(event) {
    var x = document.getElementById("board");
    this.clickMessage = event.target.id;
  }

}
