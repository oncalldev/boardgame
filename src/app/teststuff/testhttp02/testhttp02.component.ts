import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { BoardService } from '../../services/board.service';
import { detectChangesInternal } from '@angular/core/src/render3/instructions';

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
  selector: 'aas-testhttp02',
  templateUrl: './testhttp02.component.html',
  styleUrls: ['./testhttp02.component.css']
})
export class Testhttp02Component implements OnInit {

  constructor(private boardsvc : BoardService) { }
  board: Board;

  ngOnInit() {
    this.boardsvc.getBoard().subscribe (
      data => {
        this.board = data as Board;
        console.log(this.board);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }      
    )

  }

}
