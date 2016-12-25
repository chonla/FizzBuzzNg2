/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FizzbuzzService } from './fizzbuzz.service';

describe('FizzbuzzService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FizzbuzzService]
    });
  });

  it('should ...', inject([FizzbuzzService], (service: FizzbuzzService) => {
    expect(service).toBeTruthy();
  }));
});
