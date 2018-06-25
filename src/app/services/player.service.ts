import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import {Observable, Subscriber} from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Player } from '../models/player';
@Injectable({
  providedIn: 'root'
})
export class playerService {
players : Player[];
player : Player;
numberOfPlayers : number;

  constructor(private http:HttpClient) { }

  setPlayers() {
    return this.http
    .get("./configuration/players.json")
    .pipe (
      tap ( data => {
        this.players = data as Player[],
        this.numberOfPlayers = (data as Player[]).length
      } ),       
      map ( data => (data as Player[]).length)
      )
  }
  
  getPlayerCount() : number {
    return this.players.length;
  }

  getPlayers() : Player[] {
    return this.players;
  }

  getPlayersTest() {
    return this.http
      .get("./configuration/players.json")
      .subscribe(
        data =>  {
          this.players = data as Player[];
          console.log(this.players);
        },
        (err: HttpErrorResponse) => {
          console.log(err.message);
        },
        () => this.getPlayerCount()
      )
  }
  setStartLocation(player : Player) {

  }

}
