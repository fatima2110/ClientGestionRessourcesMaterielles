/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TestingService } from './Testing.service';

describe('Service: Testing', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestingService]
    });
  });

  it('should ...', inject([TestingService], (service: TestingService) => {
    expect(service).toBeTruthy();
  }));
});
