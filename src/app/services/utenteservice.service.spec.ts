import { TestBed } from '@angular/core/testing';

import { UtenteserviceService } from './utenteservice.service';

describe('UtenteserviceService', () => {
  let service: UtenteserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtenteserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
