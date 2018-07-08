import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aas-buildboard',
  templateUrl: './buildboard.component.html',
  styleUrls: ['./buildboard.component.css']
})
export class BuildboardComponent implements OnInit {
  boxes: number[] = new Array(100);

  constructor() { }

  ngOnInit() {
    console.log(this.boxes.length);
  }

}
