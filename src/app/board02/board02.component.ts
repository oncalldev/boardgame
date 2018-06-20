import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { boardService } from '../services/board.service';
import { Board } from '../models/board';
import { Box } from '../models/box';

@Component({
  selector: 'aas-board02',
  templateUrl: './board02.component.html',
  styleUrls: ['./board02.component.css']
})
export class Board02Component implements OnInit {
  board: Board;
  boxes: Box[];

  constructor(private boardsvc : boardService) { }

  ngOnInit() {
    this.getBoard();
    this.displayBoard();
  }

  getBoard() {
    this.boardsvc.getBoard().subscribe(
      data => {
        this.board = data as Board;
        this.boxes = this.board.boxes;
        console.log(this.boxes);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      } 
    )
  }

  displayBoard() {
    console.log("Displaying Board");
  }


}
