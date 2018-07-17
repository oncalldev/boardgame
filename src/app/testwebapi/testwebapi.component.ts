import { Component, OnInit } from '@angular/core';
import { CatService } from '../services/cat.service';
import { Cat } from '../models/cat';

@Component({
  selector: 'aas-testwebapi',
  templateUrl: './testwebapi.component.html',
  styleUrls: ['./testwebapi.component.css']
})
export class TestwebapiComponent implements OnInit {
  cats: Cat[];

  constructor(private catsvc : CatService) { }

  ngOnInit() {
    this.getCats();
  }

  getCats() {
    this.catsvc.getAllCats().subscribe (
      data => {
        this.cats = data as Cat[];
        console.log(this.cats);
      }
    )
  }
}
