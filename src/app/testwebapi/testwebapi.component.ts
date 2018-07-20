import { Component, OnInit } from '@angular/core';
import { CatService } from '../services/cat.service';
import { Cat } from '../models/cat';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'aas-testwebapi',
  templateUrl: './testwebapi.component.html',
  styleUrls: ['./testwebapi.component.css']
})
export class TestwebapiComponent implements OnInit {
  cats: Cat[];
  cat: Cat;

  constructor(private catsvc : CatService) { }

  ngOnInit() {

  }

  getCats(evt) {
    this.catsvc.getAllCats().subscribe (
      data => {
        this.cats = data as Cat[];
        console.log(this.cats);
      }
    )
  }

  getCat(evt,name:string){
    this.catsvc.getCat(name).subscribe(
      data =>
      {
        this.cat = data as Cat;
        console.log(this.cat);
      }
    )
  }

  insertCat(evt) {
    this.cat = {name : "Soxy", age: 20};
    this.catsvc.insertCat(this.cat).subscribe(
      data => 
      {
        console.log("insertCat");
        console.log(data);
      }
    );
  }

  clearCats(evt){
    this.catsvc.clearCats().subscribe(
      data => 
      {
        console.log(data);
      }
    )
  }
}
