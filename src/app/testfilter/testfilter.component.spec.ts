import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestfilterComponent } from './testfilter.component';

describe('TestfilterComponent', () => {
  let component: TestfilterComponent;
  let fixture: ComponentFixture<TestfilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestfilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
