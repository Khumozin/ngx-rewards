import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxRewardsModule } from 'projects/ngx-rewards/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxRewardsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
