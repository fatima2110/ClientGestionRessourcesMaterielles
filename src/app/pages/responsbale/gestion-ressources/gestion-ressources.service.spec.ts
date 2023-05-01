import { TestBed } from '@angular/core/testing';

import { GestionRessourcesService } from './gestion-ressources.service';

describe('GestionRessourcesService', () => {
  let service: GestionRessourcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionRessourcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
