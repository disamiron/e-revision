import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { howItWorksImgArray } from '../../constants';
import { ColorMap, TextSizes } from '../../enums';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';

@Component({
  selector: 'app-how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss'],
})
export class HowItWorksComponent implements AfterViewInit, OnDestroy {
  @ViewChild('sliderImgRef') public sliderImgRef:
    | ElementRef<HTMLElement>
    | undefined;

  public currentSlide: number = 0;

  public slider: KeenSliderInstance | null = null;

  public readonly TextSizes = TextSizes;

  public readonly ColorMap = ColorMap;

  public readonly howItWorksImgArray: string[] = howItWorksImgArray;

  public ngAfterViewInit() {
    if (this.sliderImgRef && this.sliderImgRef?.nativeElement) {
      this.slider = new KeenSlider(this.sliderImgRef?.nativeElement, {
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
