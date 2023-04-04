import { TestBed } from '@angular/core/testing';

import { MaterielServiceService } from './materiel-service.service';

describe('MaterielServiceService', () => {
  let service: MaterielServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaterielServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
