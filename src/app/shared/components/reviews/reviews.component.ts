import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { ColorMap, TextSizes } from '../../enums';
import { reviewsTexts, userReviewsArray } from '../../constants';
import { UserReview } from '../../interfaces';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements AfterViewInit, OnDestroy {
  @ViewChild('sliderPreviewRef') public sliderPreviewRef:
    | ElementRef<HTMLElement>
    | undefined;

  public currentSlide: number = 0;

  public slider: KeenSliderInstance | null = null;

  public userReviewsArray: UserReview[] = userReviewsArray;

  public readonly TextSizes = TextSizes;

  public readonly ColorMap = ColorMap;

  public reviewsTexts = reviewsTexts;

  public ngAfterViewInit() {
    if (this.sliderPreviewRef && this.sliderPreviewRef?.nativeElement) {
      this.slider = new KeenSlider(this.sliderPreviewRef?.nativeElement, {
        slideChanged: (s) => {
          this.currentSlide = s.track.details.rel;
        },
      });
    }
  }

  public ngOnDestroy() {
    this.slider?.destroy();
  }
}
