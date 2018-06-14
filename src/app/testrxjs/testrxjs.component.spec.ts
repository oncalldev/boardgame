import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestrxjsComponent } from './testrxjs.component';

describe('TestrxjsComponent', () => {
  let component: TestrxjsComponent;
  let fixture: ComponentFixture<TestrxjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestrxjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestrxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
