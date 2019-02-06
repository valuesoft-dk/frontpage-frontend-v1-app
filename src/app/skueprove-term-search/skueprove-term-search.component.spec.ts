import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkueproveTermSearchComponent } from './skueprove-term-search.component';

describe('SkueproveTermSearchComponent', () => {
  let component: SkueproveTermSearchComponent;
  let fixture: ComponentFixture<SkueproveTermSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkueproveTermSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkueproveTermSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
