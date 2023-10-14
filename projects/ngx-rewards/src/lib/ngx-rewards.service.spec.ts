import { TestBed } from '@angular/core/testing';

import { NgxRewardsService } from './ngx-rewards.service';

describe('NgxRewardsService', () => {
  let service: NgxRewardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxRewardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
