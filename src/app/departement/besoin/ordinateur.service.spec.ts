import { TestBed } from '@angular/core/testing';

import { OrdinateurService } from '../../../services/ordinateur.service';

describe('OrdinateurService', () => {
  let service: OrdinateurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdinateurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
