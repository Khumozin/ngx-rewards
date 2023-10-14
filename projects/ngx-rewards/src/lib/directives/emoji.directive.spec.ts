import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { EmojiDirective } from './emoji.directive';

describe('EmojiDirective', () => {
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
    const directive = new EmojiDirective(elRef);
    expect(directive).toBeTruthy();
  });
});
