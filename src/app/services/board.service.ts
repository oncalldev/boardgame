import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Board } from '../models/board';
import { Box } from '../models/box';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
board: Board;
boxes: Box[];
selectedBox : Box;

  constructor(private http:HttpClient) { }

  getBoard() {
    return this.http
      .get("./configuration/board.json")
      .pipe (
        tap ( data=> {
            this.board = data as Board,
            this.boxes = this.board.boxes
        })
        //map ( data => ((data as Board).boxes).length
        //)
        
      )
  }

  getBoxes() : Box[] {
    return this.boxes;
  }

  getBoxId(boxId : string) {
    // Need to search through the boxes in the board object
    this.selectedBox = this.boxes.find( bx => bx.id == boxId);
    console.log(this.selectedBox);
    return this.selectedBox;
  }

  getNextBox() {
    
  }
}
