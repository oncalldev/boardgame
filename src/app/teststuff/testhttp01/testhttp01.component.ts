import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

class Box {
  id: string;
  status: string;
  gridArea: string;
  color: string;
  bgColor: string;
}

class Board {
  rows:number;
  columns: number;
  levels: number;
  box_width: number;
  default_box_bg_color: string;
  default_text_color : string;
  boxes : Box[];
}

@Component({
  selector: 'aas-testhttp01',
  templateUrl: './testhttp01.component.html',
  styleUrls: ['./testhttp01.component.css']
})
export class Testhttp01Component implements OnInit {

  constructor(private httpService: HttpClient) { }
  board: Board;

  ngOnInit() {
    this.httpService.get('./configuration/board.json')
    .subscribe (
      data => {
        this.board = data as Board;
        console.log(this.board);
        console.log(this.board.boxes);
        // this.arrBirds.filter(bird => bird.ID == 1);
        //console.log(this.board);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    )
  }

}
