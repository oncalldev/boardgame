import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'aas-teststyle',
  templateUrl: './teststyle.component.html',
  styleUrls: ['./teststyle.component.css']
})
export class TeststyleComponent implements OnInit {
  colorred = 'textred';
  colorblue = "textblue";
  colorgreen = "textgreen";
  
  constructor() { }

  ngOnInit() {
  }

}
