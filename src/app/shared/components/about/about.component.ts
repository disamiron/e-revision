import { Component } from '@angular/core';
import { ColorMap, TextSizes } from '../../enums';
import { mainTexts } from '../../constants';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  public TextSizes = TextSizes;

  public ColorMap = ColorMap;

  public mainTexts = mainTexts;
}
