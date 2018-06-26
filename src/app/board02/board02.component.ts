import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { boardService } from '../services/board.service';
import { generalService } from '../services/general.service';
import { playerService} from '../services/player.service';

import { Board } from '../models/board';
import { Box } from '../models/box';
import { Player } from '../models/player';
import { Observable, interval, pipe} from 'rxjs';
import { take, tap } from 'rxjs/operators';
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
  players: Player[];
  numPlayers: number;
  numBoxes: number;
  title: string = "Board";

  public value: Observable<string>;

  constructor(private boardsvc : boardService,
              private generalSvc: generalService,
              private playerSvc: playerService,
              private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.value = this.generalSvc.getValue();
    this.getBoard();
    this.setPlayers();
    this.getPlayers();
    //this.movePlayersToOrigin(this.players, this.board);
    this.displayBoard();
  }

  getBoard() {

    this.boardsvc.getBoard().subscribe(
      data => {
        this.board = data as Board;
        this.boxes = this.board.boxes;
        console.log("Number of Boxes: " + this.board.boxes.length);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      } 
    )
  }
  getBoxes() { 
    return this.boardsvc.getBoxes();
  }

  getBoxId(boxId : string) {
    return this.boardsvc.getBoxId(boxId);
  }

  setPlayers() {
    this.playerSvc.setPlayers().subscribe (
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
    this.players = this.playerSvc.getPlayers();
    //console.log(this.players);
    return this.players;
  }

  movePlayersToOrigin(players : Player[], board : Board)
  {
    var offset : number = 0;
    console.log("moving players to origin");
    let box = board.boxes.find( bx => bx.id == board.origin);
    for (var player of players)
    {
      this.movePlayer(player, box.id, offset);
      offset += 25;
    }
  }

  movePlayerNumber(player : Player, boxes : Box[], numBoxes : number)
  {
    console.log("moving player 3 spaces");
    var currentLocation = player.location;
    var currentBox = boxes.find(bx => bx.id == currentLocation);
    var nextBoxId = currentBox.next;
    
    // const secondsCounter = interval(1000);
    // secondsCounter
    //   .pipe(
    //     take(this.move)
    //   )
    const moveBox = interval(1000);
    moveBox
      .pipe(
        take(3),
        tap ( data =>
          {
            currentBox = boxes.find(bx=> bx.id == nextBoxId);
            nextBoxId = currentBox.next;
          }             
        )
      ).subscribe( () => this.movePlayer(player, nextBoxId, 0));

    // .subscribe( n=> this.updateMessage(n));
  }

  // constructor(private ref: ChangeDetectorRef) {
  //   ref.detach();
  //   setInterval(() => {
  //     this.ref.detectChanges();
  //   }, 5000);
  // }


  movePlayer(player : Player, boxId : string, offset : number) {
    // we really need to bring in more than just the boxId to make sure that we're going
    // to a box that exists.

    var currentPlayer = document.getElementById(player.id);
    var moveToBox = document.getElementById(boxId);
    this.title = boxId;  // I was hoping this would force a change detect
    player.location = boxId;

    currentPlayer.style.left = (moveToBox.offsetLeft + 15).toString() + "px";
    currentPlayer.style.top = (moveToBox.offsetTop + 15 + offset).toString() + "px";

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
