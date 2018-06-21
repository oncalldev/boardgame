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

  movePlayer(event) {
    var box1 = document.getElementById("1/1/2/2");
    var box2 = document.getElementById("1/2/2/3");
    var box11 = document.getElementById("4/2/5/3");
    var player1 = document.getElementById("player1"); 
    var player2 = document.getElementById("player2"); 
    player1.style.left = (box1.offsetLeft + 20).toString() + "px";
    player1.style.top = (box1.offsetTop + 20).toString() + "px";
    player2.style.left = (box11.offsetLeft + 20).toString() + "px";
    player2.style.top = (box11.offsetTop + 20).toString() + "px";  
  }

  displayBoard() {
    console.log("Displaying Board");
  }


}