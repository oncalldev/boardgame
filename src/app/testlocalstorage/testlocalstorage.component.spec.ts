import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestlocalstorageComponent } from './testlocalstorage.component';

describe('TestlocalstorageComponent', () => {
  let component: TestlocalstorageComponent;
  let fixture: ComponentFixture<TestlocalstorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestlocalstorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestlocalstorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
