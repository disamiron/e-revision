import { Component } from '@angular/core';
import { headerLinks, logoImgSrc } from '../../constants';
import { Buttons, ColorMap, TextSizes } from '../../enums';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public logoImgSrc = logoImgSrc;

  public headerLinks = headerLinks;

  public Buttons = Buttons;

  public isMenuOpen: boolean = false;

  public TextSizes = TextSizes;

  public ColorMap = ColorMap;
}
