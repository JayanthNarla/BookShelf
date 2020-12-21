import { TestBed } from '@angular/core/testing';

import { FreebooksService } from './freebooks.service';

describe('FreebooksService', () => {
  let service: FreebooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreebooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
