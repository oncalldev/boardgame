import { Component, OnInit } from '@angular/core';
import { generalService } from '../services/general.service';

@Component({
  selector: 'aas-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  constructor( private generalSvc : generalService) { }

  ngOnInit() {
  }

  rollDice(event) {
    var dice = this.diceRoller(2);
    document.getElementById("dice_results").innerHTML = dice.toString();
    this.generalSvc.setValue(dice.toString());
    console.log("Dice Rolled");
  }

  pickCard(event){
    document.getElementById("card_results").innerHTML = "Card Picked";
    console.log("Pick Card");
  }

  spinSpinner(event){
    document.getElementById("spinner_results").innerHTML = "Spinner Spun";    
    console.log("Spin Spinner");
  }

  diceRoller(numberOfDice : number) : number {
    // numberOfDice is not brought into consideration here - just testing.
    var die1 = Math.floor( (Math.random() * 6) + 1);
    var die2 = Math.floor( (Math.random() * 6) + 1); 
    return die1 + die2;
  }
}
