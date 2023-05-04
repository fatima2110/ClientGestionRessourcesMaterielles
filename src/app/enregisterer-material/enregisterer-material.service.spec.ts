import { TestBed } from '@angular/core/testing';

import { EnregistererMaterialService } from './enregisterer-material.service';

describe('EnregistererMaterialService', () => {
  let service: EnregistererMaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnregistererMaterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
