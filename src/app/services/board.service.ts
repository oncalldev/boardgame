import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class boardService {

  constructor(private http:HttpClient) { }

  getBoard() {
    return this.http
      .get("./configuration/board.json")
  }

  getNextBox() {
    
  }
}
