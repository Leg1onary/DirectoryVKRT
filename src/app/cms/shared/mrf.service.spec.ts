import { TestBed } from '@angular/core/testing';

import { MrfService } from './mrf.service';

describe('MrfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MrfService = TestBed.get(MrfService);
    expect(service).toBeTruthy();
  });
});
