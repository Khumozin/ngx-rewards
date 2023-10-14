import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRewardsComponent } from './ngx-rewards.component';

describe('NgxRewardsComponent', () => {
  let component: NgxRewardsComponent;
  let fixture: ComponentFixture<NgxRewardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxRewardsComponent]
    });
    fixture = TestBed.createComponent(NgxRewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
