import { TestBed, inject } from '@angular/core/testing';

import { PlaymasterService } from './playmaster.service';

describe('PlaymasterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaymasterService]
    });
  });

  it('should be created', inject([PlaymasterService], (service: PlaymasterService) => {
    expect(service).toBeTruthy();
  }));
});
