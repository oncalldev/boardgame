import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestupdateComponent } from './testupdate.component';

describe('TestupdateComponent', () => {
  let component: TestupdateComponent;
  let fixture: ComponentFixture<TestupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
