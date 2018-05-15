import { TestBed, inject } from '@angular/core/testing';

import { AplicativoService } from './aplicativo.service';

describe('AplicativoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AplicativoService]
    });
  });

  it('should be created', inject([AplicativoService], (service: AplicativoService) => {
    expect(service).toBeTruthy();
  }));
});
