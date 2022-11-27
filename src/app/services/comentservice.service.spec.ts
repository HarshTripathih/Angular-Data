import { TestBed } from '@angular/core/testing';

import { ComentserviceService } from './comentservice.service';

describe('ComentserviceService', () => {
  let service: ComentserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComentserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
