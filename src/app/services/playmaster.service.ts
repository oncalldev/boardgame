import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, pipe, interval } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
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
            this.boxes = this.board.boxes,
            this.initGameStatus()
        })
      )
  }

  initGameStatus() {
    this.gameStatus.timestarted = new Date();
    this.gameStatus.timepaused = null;
    this.gameStatus.playorder = ["P2","P1","P3","P4"];
    this.gameStatus.lastplayer = null;
    this.gameStatus.currentplayer = null;
  }  

  initPlayers() {
    return this.http
    .get("./configuration/players.json")
    .pipe (
      tap ( data => {
        this.players = data as Player[],
        this.totalPlayers = (data as Player[]).length
        this.assignTracksToPlayers()
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

  takeTurn() : number {
    var playerId = this.whoseTurn();
    var diceRoll = this.rollDice(1);
    this.movePlayer(this.getPlayer(playerId), diceRoll);
    return diceRoll;
  }

  getPlayer(playerId : string) : Player
  {
    var player = this.players.find(plyr => plyr.id == playerId);
    return player;
  }

  getBox(boxId : string) : Box
  {
    var box = this.boxes.find(bx =>bx.id == boxId);
    return box;
  }

  movePlayer(player : Player, numBoxes : number)
  {
    var currentLocation = player.location;
    var currentBox = this.boxes.find(bx => bx.id == currentLocation);
    var nextBoxId = currentBox.next;
    var box : Box;
    //var die = this.generalSvc.getValue();
    
    const moveBox = interval(500);
    moveBox
      .pipe(
          take(Number(numBoxes) )
        ).subscribe( () => {
        this.movePlayerOnBoard(player, nextBoxId);
        box = this.getBox(nextBoxId);
        //this.addAssetsToPlayer (player, box);
        currentBox = this.boxes.find(bx=> bx.id == nextBoxId);
        nextBoxId = currentBox.next;
      },
      error => console.log("Error:", error),
      ()=> {
        this.addAssetsToPlayer(player, box);
        console.log(player);
      });
  }

  addAssetsToPlayer(player :Player, box : Box) {
    player.resources.money += box.resources.money;
    player.resources.credits += box.resources.credits;
    this.addGoodiesToPlayer( player, box.resources.goody )
  }

  addGoodiesToPlayer(player:Player, goody: string) {
    // Need to check if the player already has the goody, if yes:
    // add to quantity of goody, if not add goody
    //currentBox = boxes.find(bx=> bx.id == nextBoxId);
    var found = player.resources.goodies.find( g=> g.description == goody);
    if(found == undefined) {
      player.resources.goodies.push({quantity: 1, description: goody})
    }
    else {
      found.quantity++;
    }
  }

  movePlayerOnBoard(player : Player, boxId : string) {
    // we really need to bring in more than just the boxId to make sure that we're going
    // to a box that exists.

    var currentPlayer = document.getElementById(player.id);
    var moveToBox = document.getElementById(boxId);
    player.location = boxId;
    var track = player.track;

    currentPlayer.style.left = (moveToBox.offsetLeft + this.getLeftOffset(track) ).toString() + "px";
    currentPlayer.style.top = (moveToBox.offsetTop + 15 + this.getTopOffset(track)).toString() + "px";
  }

  rollDice(numDice:number) : number {
    // Assume for now that we're just going to throw a single die
    var die1 : number = Math.floor( (Math.random() * 6) + 1);
    var die2 : number = 0;
    return die1 + die2;
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

  getPlayers() : Player[] {
    return this.players;
  }

  movePlayersToOrigin() {
    var boxId = this.getBoardStartBox();
    for (let player of this.players) {
        this.movePlayerOnBoard(player, boxId);
    }
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
