import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Board01Component } from './board01.component';

describe('Board01Component', () => {
  let component: Board01Component;
  let fixture: ComponentFixture<Board01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Board01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Board01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
