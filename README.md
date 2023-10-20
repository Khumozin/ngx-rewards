# NgxRewards 🎉

Here is a [simple demo](https://ngx-rewards.web.app/)

## Table of Contents

- [About](#about)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Props & config](#props--config)
- [Contributing](#contributing)
- [License](#license)

## About

**ngx-rewards** lets you add micro-interactions to your app, and reward users with the rain of confetti, emoji or balloons in seconds.
Firing confetti all over the page may seem like a questionable idea, but keep in mind that rewarding users for their actions is not.

## Installation

```
ng add ngx-rewards
```

or

```
npm install ngx-rewards
```

##

```
// app.module.ts

import { NgxRewardsModule } from 'ngx-rewards';

@NgModule({
  declarations: [...],
  imports: [..., NgxRewardsModule],
  providers: [],
  bootstrap: [...],
})
export class AppModule {}
```

```
// app.component.ts

import { EmojiConfig } from 'ngx-rewards';

@Component({...})
export class AppComponent {
  defaultEmoji = ['🤓', '😊', '🥳', '😃', '🤪', '🔥', '🎉'];

  emojiConfig: EmojiConfig = {
    elementCount: 50,
    elementSize: 20,
  };
}
```

```
// app.component.html

<button ngxRewardsEmoji
        [emojiConfig]="emojiConfig"
        class="button">
  Emoji
</button>

<button ngxRewardsConfetti
        class="button">
  Confetti
</button>

<button ngxRewardsBalloon
        class="button">
  Balloons
</button>

<button ngxRewardsEmoji
        ngxRewardsBalloon
        ngxRewardsConfetti
        class="button">
  All 3
</button>

```

### Props & config

Confetti config object:

| name                | type       | description                                        | default                                                 |
| ------------------- | ---------- | -------------------------------------------------- | ------------------------------------------------------- |
| lifetime            | number     | time of life                                       | 200                                                     |
| angle               | number     | initial direction of particles in degrees          | 90                                                      |
| decay               | number     | how much the velocity decreases with each frame    | 0.94                                                    |
| spread              | number     | spread of particles in degrees                     | 45                                                      |
| startVelocity       | number     | initial velocity of particles                      | 35                                                      |
| elementCount        | number     | particles quantity                                 | 50                                                      |
| elementSize         | number     | particle size in px                                | 8                                                       |
| zIndex              | number     | z-index of particles                               | 0                                                       |
| position            | string     | one of CSSProperties['position'] - e.g. "absolute" | "fixed"                                                 |
| colors              | string[]   | An array of colors used when generating confetti   | ['#A45BF1', '#25C6F6', '#72F753', '#F76C88', '#F5F770'] |
| onAnimationComplete | () => void | A function that runs when animation completes      | undefined                                               |

Balloons config object:

| name                | type       | description                                        | default                                                 |
| ------------------- | ---------- | -------------------------------------------------- | ------------------------------------------------------- |
| lifetime            | number     | time of life                                       | 600                                                     |
| angle               | number     | initial direction of balloons in degrees           | 90                                                      |
| decay               | number     | how much the velocity decreases with each frame    | 0.999                                                   |
| spread              | number     | spread of balloons in degrees                      | 50                                                      |
| startVelocity       | number     | initial velocity of the balloons                   | 3                                                       |
| elementCount        | number     | balloons quantity                                  | 10                                                      |
| elementSize         | number     | balloons size in px                                | 20                                                      |
| zIndex              | number     | z-index of balloons                                | 0                                                       |
| position            | string     | one of CSSProperties['position'] - e.g. "absolute" | "fixed"                                                 |
| colors              | string[]   | An array of colors used when generating balloons   | ['#A45BF1', '#25C6F6', '#72F753', '#F76C88', '#F5F770'] |
| onAnimationComplete | () => void | A function that runs when animation completes      | undefined                                               |

Emoji config object:

| name                | type       | description                                        | default                                    |
| ------------------- | ---------- | -------------------------------------------------- | ------------------------------------------ |
| lifetime            | number     | time of life                                       | 200                                        |
| angle               | number     | initial direction of emoji in degrees              | 90                                         |
| decay               | number     | how much the velocity decreases with each frame    | 0.94                                       |
| spread              | number     | spread of emoji in degrees                         | 45                                         |
| startVelocity       | number     | initial velocity of emoji                          | 35                                         |
| elementCount        | number     | emoji quantity                                     | 20                                         |
| elementSize         | number     | emoji size in px                                   | 25                                         |
| zIndex              | number     | z-index of emoji                                   | 0                                          |
| position            | string     | one of CSSProperties['position'] - e.g. "absolute" | "fixed"                                    |
| emoji               | string[]   | An array of emoji to shoot                         | ['🤓', '😊', '🥳', '😃', '🤪', '🔥', '🎉'] |
| onAnimationComplete | () => void | A function that runs when animation completes      | undefined                                  |

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and test them thoroughly.
4. Create a pull request with a clear description of you changes.

## License

This News App project is licensed under the `MIT License`. Feel free to use and modify it as per your requirements.
