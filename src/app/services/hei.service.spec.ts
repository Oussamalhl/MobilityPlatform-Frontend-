import { TestBed } from '@angular/core/testing';

import { HeiService } from './hei.service';

describe('HeiService', () => {
  let service: HeiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
