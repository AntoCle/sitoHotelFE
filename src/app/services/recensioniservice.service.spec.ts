import { TestBed } from '@angular/core/testing';

import { RecensioniserviceService } from './recensioniservice.service';

describe('RecensioniserviceService', () => {
  let service: RecensioniserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecensioniserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
