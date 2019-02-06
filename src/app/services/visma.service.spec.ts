import { TestBed } from '@angular/core/testing';

import { VismaService } from './visma.service';

describe('VismaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VismaService = TestBed.get(VismaService);
    expect(service).toBeTruthy();
  });
});
