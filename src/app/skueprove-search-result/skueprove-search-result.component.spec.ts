import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkueproveSearchResultComponent } from './skueprove-search-result.component';

describe('SkueproveSearchResultComponent', () => {
  let component: SkueproveSearchResultComponent;
  let fixture: ComponentFixture<SkueproveSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkueproveSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkueproveSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
