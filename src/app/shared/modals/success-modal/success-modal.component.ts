import { Component } from '@angular/core';
import { successModal } from '../../constants';
import { ColorMap, TextSizes } from '../../enums';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss'],
})
export class SuccessModalComponent {
  public TextSizes = TextSizes;

  public ColorMap = ColorMap;

  public successModal = successModal;
}
