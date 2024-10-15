import { Component } from '@angular/core';
import { ColorMap, TextSizes } from '../../enums';
import { advantagesImgArray } from '../../constants';

@Component({
  selector: 'app-why-our-app',
  templateUrl: './why-our-app.component.html',
  styleUrls: ['./why-our-app.component.scss'],
})
export class WhyOurAppComponent {
  public TextSizes = TextSizes;

  public ColorMap = ColorMap;

  public advantagesImgArray: string[] = advantagesImgArray;
}
