import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesttooltipComponent } from './testtooltip.component';

describe('TesttooltipComponent', () => {
  let component: TesttooltipComponent;
  let fixture: ComponentFixture<TesttooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesttooltipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesttooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
