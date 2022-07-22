import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})

export class RatingComponent implements OnChanges {
  @Input()
  ratingIndex: number = 0;
  starWidth: number = 0;

  ngOnChanges(): void {
    this.starWidth = (this.ratingIndex * 74) / 5;
  }
}
