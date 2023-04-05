import { TestBed } from '@angular/core/testing';

import { HeapServiceService } from './heap-service.service';

describe('HeapServiceService', () => {
  let service: HeapServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeapServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
