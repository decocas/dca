import { TestBed } from '@angular/core/testing';

import { FrutaaService } from './frutaa.service';

describe('FrutaaService', () => {
  let service: FrutaaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrutaaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
