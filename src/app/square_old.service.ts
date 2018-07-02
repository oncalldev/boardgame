import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import { map } from "rxjs/operators";

@Injectable()
export class SquareService {
  private _url= 'configuration/squares.json';
  constructor(private _http: HttpClient) {}

  getSquares () {
    return this._http.get(this._url)
    .pipe( map( (response: Response) => response.json() ) )
  }
}
