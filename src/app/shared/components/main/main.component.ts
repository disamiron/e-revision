import { Component } from '@angular/core';
import { Buttons, ColorMap, TextSizes } from '../../enums';
import { demoMobileImgSrc, numberTextsCodes } from '../../constants';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  public TextSizes = TextSizes;

  public ColorMap = ColorMap;

  public Buttons = Buttons;

  public numberTextsCodes = numberTextsCodes;

  public demoMobileImgSrc = demoMobileImgSrc;
}
