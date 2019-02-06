import { TestBed } from '@angular/core/testing';

import { SkueproveFormService } from './skueprove-form.service';

describe('SkueproveFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkueproveFormService = TestBed.get(SkueproveFormService);
    expect(service).toBeTruthy();
  });
});
