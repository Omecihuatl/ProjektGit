import { TestBed, inject } from '@angular/core/testing';

import { TrackingSearchService } from './tracking-search.service';

describe('TrackingSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrackingSearchService]
    });
  });

  it('should be created', inject([TrackingSearchService], (service: TrackingSearchService) => {
    expect(service).toBeTruthy();
  }));
});
