import { TestBed } from '@angular/core/testing';

import { GetAccessService } from './get-access.service';

describe('RevisionService', () => {
  let service: GetAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
