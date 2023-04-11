import { TestBed } from '@angular/core/testing';

import { CameraserviziserviceService } from './cameraserviziservice.service';

describe('CameraserviziserviceService', () => {
  let service: CameraserviziserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CameraserviziserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
