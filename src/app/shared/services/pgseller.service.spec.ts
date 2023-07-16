import { TestBed } from '@angular/core/testing';

import { PgsellerService } from './pgseller.service';

describe('PgsellerService', () => {
  let service: PgsellerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PgsellerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
