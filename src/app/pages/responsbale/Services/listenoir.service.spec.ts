import { TestBed } from '@angular/core/testing';

import { ListenoirService } from './listenoir.service';

describe('ListenoirService', () => {
  let service: ListenoirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListenoirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
