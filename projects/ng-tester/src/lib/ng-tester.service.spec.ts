import { TestBed } from '@angular/core/testing';

import { NgTesterService } from './ng-tester.service';

describe('NgTesterService', () => {
  let service: NgTesterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgTesterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
