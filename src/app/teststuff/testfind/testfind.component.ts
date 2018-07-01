import { Component, OnInit } from '@angular/core';
import { Player, Goody} from '../../models/player';

@Component({
  selector: 'aas-testfind',
  templateUrl: './testfind.component.html',
  styleUrls: ['./testfind.component.css']
})

export class TestfindComponent implements OnInit {
  goodies : Goody[] = [{quantity: 1, description: "Cat"}, 
                       {quantity: 1, description: "Dog"}, 
                       {quantity: 0, description: "Skunk"}]

  constructor() { }

  ngOnInit() {
    console.log(this.goodies);
  }

  addGoody() {
    this.addGoodyQuantity(this.goodies, "Cat");
    console.log(this.goodies);
  }

  subtractGoody() {
    this.subtractGoodyQuantity(this.goodies, "Cat");
    console.log(this.goodies);
  }

  addGoodyQuantity(goodies:Goody[], desc: string) {
    var found : boolean = false;
    var pos : number;
    pos = goodies.findIndex(g=>g.description == desc);
    if (pos > -1) {
      goodies[pos].quantity++;
    }
    else
    {
      goodies.push({ "quantity" : 1, "description" : desc});
    }
    console.log ("Add Position: " + pos);

    // for (var goody of goodies){
    //   if(goody.description == desc){
    //     goody.quantity++;
    //     found = true;
    //   }
    // }

    // if (!found) goodies.push({ "quantity" : 1, "description" : desc});
  }
  subtractGoodyQuantity(goodies: Goody[], desc: string) {
    var found : boolean = false;
    var pos : number;
    pos = goodies.findIndex(g=>g.description == desc);
    if (pos > -1) {
      goodies[pos].quantity--;
      if(goodies[pos].quantity <= 0)
      {
        goodies.splice(pos, 1);
      }
    }
    console.log ("Subtract Position: " + pos);   
  }
}
