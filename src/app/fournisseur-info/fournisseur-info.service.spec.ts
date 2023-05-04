import { TestBed } from '@angular/core/testing';

import { FournisseurInfoService } from './fournisseur-info.service';

describe('FournisseurInfoService', () => {
  let service: FournisseurInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FournisseurInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
