import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { BoardService } from '../services/board.service';
import { GeneralService } from '../services/general.service';
import { PlayerService} from '../services/player.service';

import { Board } from '../models/board';
import { Box } from '../models/box';
import { Player } from '../models/player';
import { Goody } from '../models/player';
import { Observable, interval, pipe, BehaviorSubject} from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { async } from 'rxjs/internal/scheduler/async';
import { PlaymasterService } from '../services/playmaster.service';

@Component({
  selector: 'aas-board02',
  templateUrl: './board02.component.html',
  styleUrls: ['./board02.component.css']
})
export class Board02Component implements OnInit {

  board: Board;
  box: Box;
  boxes: Box[];
  myTimer: any;
  players: Player[];
  numPlayers: number;
  numBoxes: number;
  title: string = "Board";
  dice : number;
  debug : boolean = true;

  public diceRoll: Observable<string>;

  constructor(private boardsvc : BoardService,
              private generalSvc: GeneralService,
              private playerSvc: PlayerService,
              private playMasterSvc: PlaymasterService)
               { }

  ngOnInit() {
    //this.getBoard_Hold();
    // For the time being we're going to let the button iniialize the game
  }

  initializeGame(evnt) {
    this.getBoard();
    //this.getBoxes();
    this.getPlayers();
    //this.setPlayersToOrigin();
  }
  
  testPlayers(evnt){
    this.playMasterSvc.testPlayerTurn();
  }

  getBoard() {
    console.log("Get Board");
    //this.debugLog("Getting board");
    this.playMasterSvc.initBoard().subscribe(
      data => {
        this.board = data as Board;
        this.boxes = this.board.boxes;
        console.log(this.board);
        console.log("Number of Boxes: " + this.board.boxes.length);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      } 
    )
  }

  getBoxId(boxId : string) {
    return this.boardsvc.getBoxId(boxId);
  }

  getBoxFromId(boxId : string, boxes : Box[] ){
    // Obviously we need to take into account a box that isn't found.
    let box = boxes.find( bx => bx.id == boxId);
    return box;
  }

  getPlayers() {
    this.playMasterSvc.initPlayers().subscribe (
      data => {
        this.players = data as Player[];
        this.numPlayers = this.players.length;
        console.log(this.players);
      }
    )
  }

  getPlayerCount() {
    return this.playerSvc.getPlayerCount();
  }

  setPlayersToOrigin()
  {
    this.debugLog("Setting Players to Origin");
    this.playMasterSvc.movePlayersToOrigin();
    this.players = this.playMasterSvc.getPlayers();
    this.debugLog(this.players);

  }

  displayAllPlayers() {

  }

  displayMessage() {
    console.log("Message From Action");
  }

  rollDice() {
    this.dice = this.playMasterSvc.takeTurn();
    //this.getPlayers();
  }

  
  displayBoard() {
    console.log("Displaying Board");
  }

  debugLog(msg: any)
  {
    if(this.debug) console.log(msg);
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
