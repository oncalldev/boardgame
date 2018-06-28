import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Testhttp02Component } from './testhttp02.component';

describe('Testhttp02Component', () => {
  let component: Testhttp02Component;
  let fixture: ComponentFixture<Testhttp02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Testhttp02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Testhttp02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
