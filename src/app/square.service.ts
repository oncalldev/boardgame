import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Square} from "./square"; 
import { catchError, map, tap, filter,take} from 'rxjs/operators';
import { Box } from "./models/box";

interface ServerData {
  squares: Square[];
}

@Injectable({
  providedIn: 'root'
})
export class squareService {
  squares: Square[];
  private squaresUrl = "./configuration/squares5.json";

  constructor(private http: HttpClient) {
    this.getJSON().subscribe();
   }

   public getJSON(): Observable<Square[]> {
      return this.http
        .get<Square[]>(this.squaresUrl)
   }

   public getNextBox(currentBox) {

   }
}
