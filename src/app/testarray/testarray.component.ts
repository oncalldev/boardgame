import { Component, OnInit } from '@angular/core';

interface Box {
  id : number;
  location : string;
  color: string;
  backgroundColor : string;
}
@Component({
  selector: 'aas-testarray',
  templateUrl: './testarray.component.html',
  styleUrls: ['./testarray.component.css']
})
export class TestarrayComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
