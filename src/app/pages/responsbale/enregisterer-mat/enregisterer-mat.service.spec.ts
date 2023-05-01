import { TestBed } from '@angular/core/testing';

import { EnregistererMatService } from './enregisterer-mat.service';

describe('EnregistererMatService', () => {
  let service: EnregistererMatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnregistererMatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
