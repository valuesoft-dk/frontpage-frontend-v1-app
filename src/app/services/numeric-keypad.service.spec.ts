import { TestBed } from '@angular/core/testing';

import { NumericKeypadService } from './numeric-keypad.service';

describe('NumericKeypadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumericKeypadService = TestBed.get(NumericKeypadService);
    expect(service).toBeTruthy();
  });
});
