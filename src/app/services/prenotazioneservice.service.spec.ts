import { TestBed } from '@angular/core/testing';

import { PrenotazioneserviceService } from './prenotazioneservice.service';

describe('PrenotazioneserviceService', () => {
  let service: PrenotazioneserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrenotazioneserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
