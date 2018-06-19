import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestarrayComponent } from './testarray.component';

describe('TestarrayComponent', () => {
  let component: TestarrayComponent;
  let fixture: ComponentFixture<TestarrayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestarrayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
