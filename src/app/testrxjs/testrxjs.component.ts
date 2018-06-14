import { Component, OnInit } from '@angular/core';
import {Observable, of, from} from 'rxjs';
import {filter, map} from 'rxjs/operators';


@Component({
  selector: 'aas-testrxjs',
  templateUrl: './testrxjs.component.html',
  styleUrls: ['./testrxjs.component.css']
})
export class TestrxjsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getBeers();
    //this.getNames();
  }

getNames(){

  //emit ({name: 'Joe', age: 30}, {name: 'Frank', age: 20},{name: 'Ryan', age: 50})
  const source = from([
    { name: 'Joe', age: 30 },
    { name: 'Frank', age: 20 },
    { name: 'Ryan', age: 50 }
  ]);
  //grab each persons name, could also use pluck for this scenario
  const example = source.pipe(map( ({ age }) => age) );

  //output: "Joe","Frank","Ryan"
  const subscribe = example.subscribe(val => console.log(val));
  
}


getBeers(){
  let beers = [
    {name: "Stella", country: "Belgium", price: 9.50},
    {name: "Sam Adams", country: "USA", price: 8.50},
    {name: "Bud Light", country: "USA", price: 6.50},
    {name: "Brooklyn Lager", country: "USA", price: 8.00},
    {name: "Sapporo", country: "Japan", price: 7.50}
];


  from(beers).pipe(
      filter(beer => beer.price > 8.0),
      map(beer => {
        return {
          br: beer.name,
          pr: beer.price * 100
        };
      })
      //map(beer => beer.name + ": $" + beer.price) 
      )
      .subscribe( 
          beer => console.log(beer),
          err => console.error(err),
          () => console.log("Streaming is over")
  );

  console.log("This is the last line of the script");
  }

}
