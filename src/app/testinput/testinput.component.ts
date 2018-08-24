import {Component} from '@angular/core';
 
@Component({
  selector: 'aas-testinput',
  templateUrl: './testinput.component.html'
})
export class TestinputComponent {
  name: string = '';
  age: number;

  setValue() { 
    this.name = 'Nancy'; 
    this.age = 20;
  }
}
