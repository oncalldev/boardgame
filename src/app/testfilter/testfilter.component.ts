import { Component, OnInit } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { of, pipe } from 'rxjs';

@Component({
  selector: 'aas-testfilter',
  templateUrl: './testfilter.component.html',
  styleUrls: ['./testfilter.component.css']
})
export class TestfilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  testFilter() {
    const squareOdd = of(1, 2, 3, 4, 5)
    .pipe(
      filter(n => n % 2 !== 0),
      map(n => n * n)
    );
  }
//   // Subscribe to get values
// squareOdd.subscribe(x => console.log(x));
// }
}
