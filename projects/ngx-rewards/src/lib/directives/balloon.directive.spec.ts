import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { BalloonDirective } from './balloon.directive';

describe('BalloonDirective', () => {
  let elRef: ElementRef;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ElementRef,
          useValue: { nativeElement: document.createElement('div') },
        },
      ],
    });

    elRef = TestBed.inject(ElementRef<HTMLElement>);
  });
  it('should create an instance', () => {
    const directive = new BalloonDirective(elRef);
    expect(directive).toBeTruthy();
  });
});
