import { Component } from '@angular/core';
import { EmojiConfig } from 'projects/ngx-rewards/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public defaultEmoji = ['🤓', '😊', '🥳', '😃', '🤪', '🔥', '🎉'];

  public emojiConfig: EmojiConfig = {
    elementCount: 50,
    elementSize: 20,
  };
}
