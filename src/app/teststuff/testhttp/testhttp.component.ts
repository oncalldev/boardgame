import { Component, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
// import { filter, map } from 'rxjs/operators';
// import { of, pipe, Observable } from 'rxjs';

@Component({
  selector: 'aas-testhttp',
  templateUrl: './testhttp.component.html',
  styleUrls: ['./testhttp.component.css']
})
export class TesthttpComponent implements OnInit {
  title = 'JSON to Table Example';

  constructor(private httpService: HttpClient) { }
  arrBirds: string[];
  bird : string;
  dummy() {

  }

  showFamily() {
    var family = [{"name":"Jack",  "age": 26},
    {"name":"Jill",  "age": 22},
    {"name":"James", "age": 5 },
    {"name":"James", "age": 2 }];
    console.log(family);

    // const source = Observable.of(family);
    // console.log(source);

    let person = family.filter(person => (person.name == "James") && (person.age == 5));
    console.log(person);
  }
  ngOnInit() {
    this.httpService.get('./configuration/birds.json')
    .subscribe (
      data => {
        this.arrBirds = data as string[];
        // this.arrBirds.filter(bird => bird.ID == 1);
        console.log(this.arrBirds);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    )
  }

}

// ngOnInit() {
//   this.booksByStoreID = this.books.filter(
//           book => book.store_id === this.store.id);