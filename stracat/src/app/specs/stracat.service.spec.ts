import { TestBed, inject } from '@angular/core/testing';

import { StracatService } from './stracat.service';

describe('StracatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StracatService]
    });
  });

  it('should be created', inject([StracatService], (service: StracatService) => {
    expect(service).toBeTruthy();
  }));
});
