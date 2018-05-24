import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Square } from './square';
// import { HEROES } from './mock-heroes';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SquareService {
  private squaresUrl = 'api/squares';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET hero by id. Will 404 if id not found */
  getSquare(id: number): Observable<Square> {
    const url = `${this.squaresUrl}/${id}`;
    return this.http.get<Square>(url).pipe(
      tap(_ => this.log(`fetched square id=${id}`)),
      catchError(this.handleError<Square>(`getSquare id=${id}`))
    );
  }


/** GET heroes from the server */
getSquares (): Observable<Square[]> {
    return this.http.get<Square[]>(this.squaresUrl)
      .pipe(
        tap(squares => this.log(`fetched squares`)),
        catchError(this.handleError('getSquares', []))
      );
  }
/**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
}
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('SquareService: ' + message);
  }

  
  /** POST: add a new hero to the server */
  addSquare (square: Square): Observable<Square> {
    return this.http.post<Square>(this.squaresUrl, square, httpOptions).pipe(
      tap((square: Square) => this.log(`added square w/ id=${square.id}`)),
      catchError(this.handleError<Square>('addSquare'))
    );
  }  
  /** DELETE: delete the hero from the server */
  deleteSquare (square: Square | number): Observable<Square> {
    const id = typeof square === 'number' ? square : square.id;
    const url = `${this.squaresUrl}/${id}`;

    return this.http.delete<Square>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted square id=${id}`)),
      catchError(this.handleError<Square>('deleteSquare'))
    );
  } 
/** PUT: update the hero on the server */
  updateSquare (square: Square): Observable<any> {
    return this.http.put(this.squaresUrl, square, httpOptions).pipe(
      tap(_ => this.log(`updated square id=${square.id}`)),
      catchError(this.handleError<any>('updateSquare'))
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Square[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Square[]>(`api/squares/?name=${term}`).pipe(
      tap(_ => this.log(`found squares matching "${term}"`)),
      catchError(this.handleError<Square[]>('searchSquares', []))
    );
  }

}
    


