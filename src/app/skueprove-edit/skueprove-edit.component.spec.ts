import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkueproveEditComponent } from './skueprove-edit.component';

describe('SkueproveEditComponent', () => {
  let component: SkueproveEditComponent;
  let fixture: ComponentFixture<SkueproveEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkueproveEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkueproveEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
