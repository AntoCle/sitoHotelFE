import { TestBed } from '@angular/core/testing';

import { ServiziserviceService } from './serviziservice.service';

describe('ServiziserviceService', () => {
  let service: ServiziserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiziserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
