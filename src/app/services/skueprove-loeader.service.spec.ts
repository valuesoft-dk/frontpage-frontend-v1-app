import { TestBed } from '@angular/core/testing';

import { SkueproveLoeaderService } from './skueprove-loeader.service';

describe('SkueproveLoeaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkueproveLoeaderService = TestBed.get(SkueproveLoeaderService);
    expect(service).toBeTruthy();
  });
});
