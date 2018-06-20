import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Board02Component } from './board02.component';

describe('Board02Component', () => {
  let component: Board02Component;
  let fixture: ComponentFixture<Board02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Board02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Board02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
