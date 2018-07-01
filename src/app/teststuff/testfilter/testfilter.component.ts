import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { of, pipe } from 'rxjs';
import { CityPopulation } from '../../models/citypopulation'

@Component({
  selector: 'aas-testfilter',
  templateUrl: './testfilter.component.html',
  styleUrls: ['./testfilter.component.css']
})

export class TestFilterComponent implements OnInit {

  constructor() { 

;}

  ngOnInit(){
    let num : number;
    num = this.testReturnValue(25);
    console.log("Num: " + num);

    let cityPop : CityPopulation;
    var cities = this.testArrayFilter();
    console.log(cities);
  };
  
  testReturnValue(val:number) : number {
    return val;
  }

  testArrayFilter() : CityPopulation[] {
    let data = [
      {
        country: 'China',
        population: 1000,
      },
      {
        country: 'India',
        population: 2000,
      },
      {
        country: 'USA',
        population: 3000,
      },
      {
        country: 'Indonesia',
        population: 4000,
      }
    ] 

    let cities = data.filter(val => val.population > 1000);
    return cities;
  }

  // testFilter() {
  //   const squareOdd = of(1, 2, 3, 4, 5)
  //   .pipe(
  //     filter(n => n % 2 !== 0),
  //     map(n => n * n)
  //   );
  }



