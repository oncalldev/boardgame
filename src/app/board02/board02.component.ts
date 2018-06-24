import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { boardService } from '../services/board.service';
import { generalService } from '../services/general.service';
import { playerService} from '../services/player.service';

import { Board } from '../models/board';
import { Box } from '../models/box';
import { Observable } from 'rxjs';
import { async } from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'aas-board02',
  templateUrl: './board02.component.html',
  styleUrls: ['./board02.component.css']
})
export class Board02Component implements OnInit {
  board: Board;
  boxes: Box[];
  myTimer: any;
  numPlayers: number;

  public value: Observable<string>;

  constructor(private boardsvc : boardService,
              private generalSvc: generalService,
              private playerSvc: playerService) { }

  ngOnInit() {
    this.value = this.generalSvc.getValue();
    this.getBoard();
    this.setPlayers2();
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

  setPlayers2() {
    this.playerSvc.setPlayers2().subscribe (
      data => {
        this.numPlayers = data as number,
        console.log("Number of Players: " + this.numPlayers)
      }
    )
  }

  getPlayerCount() {
    return this.playerSvc.getPlayerCount();
  }

  getPlayers() {
    return this.playerSvc.getPlayers();
  }

  movePlayer(event) {
    var box1 = document.getElementById("1/1/2/2");
    var box2 = document.getElementById("1/2/2/3");
    var box11 = document.getElementById("4/2/5/3");
    var player1 = document.getElementById("player1"); 
    var player2 = document.getElementById("player2"); 

    var obj = { 
      player: player1, 
      incr: 0
    };
    

    //this.slowMove(player1);
    this.myTimer = setInterval(this.slowMove, 500, obj);

    // player1.style.left = (box1.offsetLeft + 20).toString() + "px";
    // player1.style.top = (box1.offsetTop + 20).toString() + "px";
    // player2.style.left = (box11.offsetLeft + 20).toString() + "px";
    // player2.style.top = (box11.offsetTop + 20).toString() + "px";  
  }

  slowMove(obj) {

      obj.player.style.left = (obj.player.offsetLeft + obj.incr).toString() + "px";
      obj.incr += 30;
      if (obj.incr > 200) {
        clearInterval(this.myTimer)
        console.log("Cleared");
      }
      console.log(obj.incr);
  }
  
  displayBoard() {
    console.log("Displaying Board");
  }

  convertStatus(status : string) : string {
    switch(status) {
      case 'H':
          return 'hidden';

      default:
          return 'visible';
  }   
  }
}
