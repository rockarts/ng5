import { TestBed, inject } from '@angular/core/testing';

import { IndexeddbService } from './indexeddb.service';

describe('IndexeddbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndexeddbService]
    });
  });

  it('should be created', inject([IndexeddbService], (service: IndexeddbService) => {
    expect(service).toBeTruthy();
  }));
});
