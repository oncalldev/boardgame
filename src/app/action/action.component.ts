import { Component, OnInit, Input } from '@angular/core';
import { GeneralService } from '../services/general.service';
import { Board02Component } from '../board02/board02.component';
import { Board } from '../models/board';

@Component({
  selector: 'aas-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {
  private bc: Board02Component;
  constructor( private generalSvc : GeneralService) { }
  @Input() diceRoll: Board02Component;
  ngOnInit() {
  }

  rollDice(event) {
    var dice = this.diceRoller(2);
    document.getElementById("dice_results").innerHTML = dice.toString();
    this.generalSvc.setValue(dice.toString());
    this.bc.displayMessage();
    console.log("Dice Rolled");
    //this.diceRoll.movePlayerNumber();
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
    var die2 = 0;
    //var die2 = Math.floor( (Math.random() * 6) + 1); 
    return die1 + die2;
  }
}
