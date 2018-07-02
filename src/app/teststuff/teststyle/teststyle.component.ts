import { Component, OnInit } from '@angular/core';
import { Square } from "../../models/square";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap, filter,take} from 'rxjs/operators';
import { MessageService } from '../../services/message.service';
import { SquareService  } from '../../services/square.service';


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
  private squareID: string;

  constructor(
    private SquareService: SquareService,
    private MessageService: MessageService) { }

  ngOnInit() {
    this.color = this.colorred;
    this.SquareService.getJSON().subscribe(
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

  changeColor(event) {
    this.squareID = "X5";
    this.clickMessage = "Color Change Request";
    var classList = document.getElementById(this.squareID).classList;
    console.log(classList);

    document.getElementById(this.squareID).classList.remove("clr_red", "clr_blue", "clr_yellow");
    //document.getElementById(this.squareID).classList.remove(this.removeClasses() );
    //document.getElementById(this.squareID).classList.add("green");
    //document.getElementById(this.squareID).classList.add(this.getClasses());
  }
  removeClasses_old() : string {
    var arr : string[] = ["clr_red", "clr_blue", "clr_yellow"];
    var str : string = '"clr_red","clr_blue","clr_yellow"';
    console.log(str);
    return str;
  }

  getClasses() : string {
    return ("clr_green");
  }
  
  arrayFilter() {
    
  }

  removeClasses(){
    var arr: string[] = ["clr_red", "dummy1", "clr_blue", "dummy2", "clr_yellow"];
    var filtered = arr.filter(function(x){
      return x.startsWith("clr_");
    })
    for (let i = 0; i < filtered.length; i++){
      document.getElementById(this.squareID).classList.remove(filtered[i]);
    }
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

