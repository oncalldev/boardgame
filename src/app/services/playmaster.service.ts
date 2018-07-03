import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Board } from '../models/board';
import { Box } from '../models/box';
import { Player } from '../models/player';
import { GameStatus } from '../models/gamestatus';

// Used to pass information to the board about the the player's move

export class Mover
{
  numberToMove : number;
  player : Player;
  gotobox : Box;
  route : string[]
}

@Injectable({
  providedIn: 'root'
})
export class PlaymasterService {

board: Board;
boxes: Box[];
players: Player[];
player: Player;
totalPlayers: number;
activePlayers: number;
gameStatus : GameStatus = new GameStatus();

  constructor(private http:HttpClient) { }

  initBoard() {
    return this.http
      .get("./configuration/board.json")
      .pipe (
        tap ( data=> {
            this.board = data as Board,
            this.boxes = this.board.boxes
        })
      )
  }

  initPlayers() {
    return this.http
    .get("./configuration/players.json")
    .pipe (
      tap ( data => {
        this.players = data as Player[],
        this.totalPlayers = (data as Player[]).length
      })
    )
  }  

  assignTracksToPlayers() {
    var incr : number = 0;
    // We need to make sure that we have sufficient tracks for the 
    // number of players we have - right now we just assume we have
    // 4 players and 4 tracks.
    //
    for (var player of this.players) {
      player.track = this.board.tracks[incr].id;
      incr++;
    }
  }

  initGameStatus() {
    this.gameStatus.timestarted = new Date();
    this.gameStatus.timepaused = null;
    this.gameStatus.playorder = ["P2","P1","P3"];
    this.gameStatus.lastplayer = null;
    this.gameStatus.currentplayer = null;
  }


  whoseTurn() : string {
    // find out the turn of the players
    // if the lastplayer is null then assume start of game and find first player

    if(this.gameStatus.lastplayer == null)
    {
      this.gameStatus.lastplayer = this.gameStatus.playorder[0];
      this.gameStatus.currentplayer= this.gameStatus.playorder[0];
      return this.gameStatus.currentplayer;
    }

    // swap currentplayer to lastplayer
    if(this.gameStatus.currentplayer != null) this.gameStatus.lastplayer = this.gameStatus.currentplayer;

    var index = this.gameStatus.playorder.indexOf(this.gameStatus.lastplayer);
    if (index >= this.gameStatus.playorder.length - 1){
      this.gameStatus.currentplayer = this.gameStatus.playorder[0];
    }
    else
    {
      this.gameStatus.currentplayer = this.gameStatus.playorder[index+1];
    }

    return this.gameStatus.currentplayer;
  }

  getBoardStartBox() : string {
    let box = this.board.boxes.find(bx=>bx.id == this.board.origin);
    return box.id;
  }

  movePlayersToOrigin() {
    var boxId = this.getBoardStartBox();
    for (let player of this.players) {
        this.movePlayer(player, boxId);
    }
  }

  movePlayer(player : Player, boxId : string) {
    // we really need to bring in more than just the boxId to make sure that we're going
    // to a box that exists.

    var currentPlayer = document.getElementById(player.id);
    var moveToBox = document.getElementById(boxId);
    player.location = boxId;
    var track = player.track;

    currentPlayer.style.left = (moveToBox.offsetLeft + this.getLeftOffset(track) ).toString() + "px";
    currentPlayer.style.top = (moveToBox.offsetTop + 15 + this.getTopOffset(track)).toString() + "px";

  }

  getTopOffset(track : string) : number {
    var offset = this.board.tracks.find(trk=>trk.id == track).topOffset;
    return offset;
  }

  getLeftOffset(track : string) : number {
    var offset = this.board.tracks.find(trk=>trk.id == track).leftOffset;
    return offset;
  }

  getBoxes() {
    return this.boxes;
  }

  startGame(){
    // Initialize resources of all players
    // Set board status to initial state
    // Set any other status to initial state
    // Move players to Start location of board

  }

  // Misc testing routines

  testPlayerTurn()
  {
    this.initGameStatus();
    for (let loop = 0; loop < 10; loop++)
    {
      var playerId = this.whoseTurn();
      console.log(playerId);
    }
    console.log(this.gameStatus);
  }
}
