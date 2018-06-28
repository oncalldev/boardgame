import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testhttp01Component } from './testhttp01.component';

describe('Testhttp01Component', () => {
  let component: Testhttp01Component;
  let fixture: ComponentFixture<Testhttp01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testhttp01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testhttp01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
