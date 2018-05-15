import { TestBed, inject } from '@angular/core/testing';

import { AplicativosService } from './aplicativos.service';

describe('AplicativosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AplicativosService]
    });
  });

  it('should be created', inject([AplicativosService], (service: AplicativosService) => {
    expect(service).toBeTruthy();
  }));
});
