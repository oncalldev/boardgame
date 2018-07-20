import {Component} from '@angular/core';
 
@Component({
  selector: 'example-app',
  template: `
    <input [(ngModel)]="name" #ctrl="ngModel" required minlength=5 size=60>
    <p>Value: {{ name }}</p>
    <p>Valid: {{ ctrl.valid }}</p>
    <p>Dirty: {{ ctrl.dirty}}</p>
    <p>Touched: {{ctrl.touched}}</p>
    
    <button (click)="setValue()">Set value</button>
  `,
})
export class TestinputComponent {
  name: string = '';
 
  setValue() { this.name = 'Nancy'; }
}
