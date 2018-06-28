import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestfindComponent } from './testfind.component';

describe('TestfindComponent', () => {
  let component: TestfindComponent;
  let fixture: ComponentFixture<TestfindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestfindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestfindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
