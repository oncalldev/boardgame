import { TestBed, inject } from '@angular/core/testing';

import { SquareService } from './services/square.service';

describe('SquareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SquareService]
    });
  });

  it('should be created', inject([SquareService], (service: SquareService) => {
    expect(service).toBeTruthy();
  }));
});
