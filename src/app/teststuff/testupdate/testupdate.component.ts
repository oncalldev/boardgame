import { Component, OnInit } from '@angular/core';
import { Observable, interval, pipe} from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'aas-testupdate',
  templateUrl: './testupdate.component.html',
  styleUrls: ['./testupdate.component.css']
})
export class TestupdateComponent implements OnInit {

  message:string = "Original Message";
  time: Date;
  incr: number = 0;
  move: number = 4;
  constructor() { }

  ngOnInit() {
    const secondsCounter = interval(1000);
    secondsCounter
      .pipe(
        take(this.move)
      )
        
    .subscribe( n=> this.updateMessage(n));
    // var result = interval(3000)
    //   .subscribe( () => this.updateMessage);


    // var result = interval(3000)
    //   .pipe(

    //   ).subscribe(this.updateMessage());
    //Observable.interval(3000).take(4).subscribe(() => this.updateMessage());
  }

  updateMessage(n:any): any {
      //this.incr ++;
      this.message = "Update Message: " + n;

    } 

}
