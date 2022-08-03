import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReplacePipe } from '../pipes/replacement.pipe';
import { CommonModule } from '@angular/common';

import { LanguagesListComponent } from './languagesList.component';
import { RatingComponent } from '../ratingStars/rating.component';

@NgModule({
  declarations: [LanguagesListComponent, ReplacePipe, RatingComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'languages',
        component: LanguagesListComponent,
      },
    ]),
  ],
})
export class LanguageModule {}
