import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LanguagesListComponent } from './languages/languagesList.component';
import {RatingComponent} from './ratingStars/rating.component';

@NgModule({
  declarations: [AppComponent, LanguagesListComponent, RatingComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
