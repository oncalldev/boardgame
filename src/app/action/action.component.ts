import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aas-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  rollDice(event) {
    console.log("Dice Rolled";)
  }

  pickCard(event){
    console.log("Pick Card");
  }

  spinSpinner(event){
    console.log("Spin Spinner");
  }
}
