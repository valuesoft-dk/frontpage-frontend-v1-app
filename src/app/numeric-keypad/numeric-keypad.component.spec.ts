import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericKeypadComponent } from './numeric-keypad.component';

describe('NumericKeypadComponent', () => {
  let component: NumericKeypadComponent;
  let fixture: ComponentFixture<NumericKeypadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumericKeypadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumericKeypadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
