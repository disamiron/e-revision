import { Component } from '@angular/core';
import { Buttons, ColorMap, TextSizes } from 'src/app/shared/enums';

@Component({
  selector: 'app-kit-page',
  templateUrl: './kit-page.component.html',
  styleUrls: ['./kit-page.component.scss'],
})
export class KitPageComponent {
  public TextSizes = TextSizes;

  public buttons = [
    {
      text: 'О приложении',
      buttonSize: Buttons.big,
    },
    {
      text: 'Демо версия',
      buttonSize: Buttons.average,
    },
  ];

  public typography = [
    {
      text: 'Headline 1',
      textSize: TextSizes.headline1,
      color: ColorMap.lightBlack,
    },
    {
      text: 'Headline 2',
      textSize: TextSizes.headline2,
      color: ColorMap.lightBlack,
    },
    {
      text: 'Headline 3',
      textSize: TextSizes.headline3,
      color: ColorMap.lightBlack,
    },
    {
      text: 'Big text',
      textSize: TextSizes.bigText,
      color: ColorMap.lightBlack,
    },
    {
      text: 'Parapgraph',
      textSize: TextSizes.parapgraph,
      color: ColorMap.lightBlack,
    },
    {
      text: 'Small text',
      textSize: TextSizes.smallText,
      color: ColorMap.lightBlack,
    },
    {
      text: 'Caption',
      textSize: TextSizes.caption,
      color: ColorMap.blue,
    },
    {
      text: 'x100',
      textSize: TextSizes.x100,
      color: ColorMap.blue,
    },
  ];
}
