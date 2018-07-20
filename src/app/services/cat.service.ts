import { Component, OnInit, Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface Cat {
  name: string;
}

@Injectable()
export class CatService {
  constructor(private http: HttpClient) {}

  getAllCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>('http://localhost:5200/api/cat');
  }

  getCat(name: string): Observable<Cat> {
    return this.http.get<Cat>('http://localhost:5200/api/cat/' + name);
  }

  insertCat(cat: Cat): Observable<Cat> {
    return this.http.post<Cat>('http://localhost:5200/api/cat/', cat);
  }

  updateCat(cat: Cat): Observable<void> {
    return this.http.put<void>('http://localhost:5200/api/cat/' + cat.name, cat);
  }

  deleteCat(name: string) {
    return this.http.delete('http://localhost:5200/api/cat/' + name);
  }

  clearCats() {
    return this.http.delete('http://localhost:5200/api/cat/clear');
  }
}