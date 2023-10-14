import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ConfettiDirective } from './confetti.directive';

describe('ConfettiDirective', () => {
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
    const directive = new ConfettiDirective(elRef);
    expect(directive).toBeTruthy();
  });
});
