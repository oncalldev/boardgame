import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildboardComponent } from './buildboard.component';

describe('BuildboardComponent', () => {
  let component: BuildboardComponent;
  let fixture: ComponentFixture<BuildboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
