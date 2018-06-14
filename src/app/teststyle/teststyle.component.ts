import { Component, OnInit } from '@angular/core';
import { Square } from "../square";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, filter,take} from 'rxjs/operators';
import { messageService } from '../message.service';
import { squareService  } from '../square.service';


@Component({
  selector: 'aas-teststyle',
  templateUrl: './teststyle.component.html',
  styleUrls: ['./teststyle.component.css']
})

export class TeststyleComponent implements OnInit {
  clickMessage : string = '';
  colorred = 'textred';
  colorblue = "textblue";
  colorgreen = "textgreen";
  color : string;
  squares: Square[];
  single: Square;
  singleID: string;

  array1 : Square[] = [ {id:"1", color: "red", left: "L", right: "R"},
                        {id:"2", color: "blue", left: "L1", right: "R1"}
                      ]

  array2 : Square[];

  private squaresUrl = "./configuration/sqaures5.json";

  constructor(
    private squareService: squareService,
    private messageService: messageService) { }

  ngOnInit() {
    this.color = this.colorred;
    this.squareService.getJSON().subscribe(
      data => this.setSquares(data),
      error => console.log("Error"),
      () => this.logSubscribe()
    );
  }
  setSquares(data){
    this.squares = data;
  }

  logSubscribe()
  {

  }

  targetCard(event) {
    //var x = document.getElementById("board");
    this.clickMessage = event.target.id;
  }

  // readSquares(id: string): Observable<Square> {
  //   return this.http.get<Square>(this.squaresUrl)
  //   .pipe(
  //     tap( (val)=> console.log(val))
  //     // map(sqs => {
  //     //   let y = sqs.filter(x => x.id === 'X7')[0];
  //     //   console.log("Returned Value: " + y);
  //     //   return y;
  //     // })
  //   )
  }

