import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'aas-board01',
  templateUrl: './board01.component.html',
  styleUrls: ['./board01.component.css']
})
export class Board01Component implements OnInit {
  squareID : string;
  rows : number = 5;
  columns : number = 3;
  levels : number = 1;
  box_width: number;
  box_height: number;

  row_array  = new Array(5);
  col_array = new Array(3);

  boxes : string[] = [];
  blue: string = "blue";
  red: string = "red";
  green: string = "green";

  box1: string = "1/1/2/2";
  box2: string = "1/2/2/3";
  box3: string = "1/3/2/4";



  constructor() { }

  ngOnInit() {
    this.setArray();
  }
  setArray(){
    var index:number = 0;
    for (let rs = 0; rs < this.rows; rs++ ) {
      for(let cs = 0; cs < this.columns; cs++  ){
        this.boxes[index] = (rs + 1).toString() + "/" + (cs + 1).toString() + "/" +
                            (rs + 2).toString() + "/" + (cs + 2).toString()
        index++;
      }
    }    
  }
  getRed(){
    return this.red;
  }
  changeColor(event){
    
  }
  // changeColor(event) {
  //   this.squareID = "X5";
  //   this.clickMessage = "Color Change Request";
  //   var classList = document.getElementById(this.squareID).classList;
  //   console.log(classList);

  //   document.getElementById(this.squareID).classList.remove("clr_red", "clr_blue", "clr_yellow");
  //   //document.getElementById(this.squareID).classList.remove(this.removeClasses() );
  //   //document.getElementById(this.squareID).classList.add("green");
  //   //document.getElementById(this.squareID).classList.add(this.getClasses());
  // }
  // removeClasses_old() : string {
  //   var arr : string[] = ["clr_red", "clr_blue", "clr_yellow"];
  //   var str : string = '"clr_red","clr_blue","clr_yellow"';
  //   console.log(str);
  //   return str;
  // }

  // getClasses() : string {
  //   return ("clr_green");
  // }
  
  // arrayFilter() {
    
  // }

  // removeClasses(){
  //   var arr: string[] = ["clr_red", "dummy1", "clr_blue", "dummy2", "clr_yellow"];
  //   var filtered = arr.filter(function(x){
  //     return x.startsWith("clr_");
  //   })
  //   for (let i = 0; i < filtered.length; i++){
  //     document.getElementById(this.squareID).classList.remove(filtered[i]);
  //   }
  // }
}
