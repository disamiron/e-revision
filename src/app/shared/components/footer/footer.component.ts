import { Component } from '@angular/core';
import { Buttons, ColorMap, TextSizes } from '../../enums';
import { footerTexts } from '../../constants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public TextSizes = TextSizes;

  public ColorMap = ColorMap;

  public Buttons = Buttons;

  public footerTexts = footerTexts;

  public feedbackForm: FormGroup = this._fb.group({
    name: [null, Validators.required],
    email: [null, Validators.required],
    message: [null],
    privacyPolicy: [false, Validators.requiredTrue],
  });

  constructor(private _fb: FormBuilder) {}
}
