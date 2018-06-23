import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class generalService {
  private valueObs: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  public setValue(value: string):void {
      this.valueObs.next(value);
  }

  public getValue():Observable<string> {
      return this.valueObs;
  }
}