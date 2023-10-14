import { NgModule } from '@angular/core';

import { BalloonDirective, ConfettiDirective, EmojiDirective } from './directives';

const DIRECTIVES = [BalloonDirective, ConfettiDirective, EmojiDirective];

@NgModule({
  declarations: [...DIRECTIVES],
  imports: [],
  exports: [...DIRECTIVES],
})
export class NgxRewardsModule {}
