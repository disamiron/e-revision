import { Component } from '@angular/core';
import { Buttons, ColorMap, TextSizes } from '../../enums';
import { footerTexts } from '../../constants';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SuccessModalComponent } from '../../modals/success-modal/success-modal.component';
import { GetAccessService } from '../../services/get-access/get-access.service';
import { tap } from 'rxjs';
import { GetAccessData } from '../../interfaces';

const DEFAULT_FORM_VALUES = {
  name: null,
  email: null,
  message: null,
  privacyPolicy: false,
};

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

  public feedbackForm: FormGroup = this._formBuilder.group({
    name: [null, Validators.required],
    email: [null, Validators.required],
    message: [null],
    privacyPolicy: [false, Validators.requiredTrue],
  });

  constructor(
    private _formBuilder: FormBuilder,
    private _getAccessService: GetAccessService,
    private _dialog: MatDialog
  ) {}

  public getAccess() {
    if (this.feedbackForm.invalid) {
      return;
    }

    const { name, email, message }: GetAccessData = this.feedbackForm.value;

    this._getAccessService
      .getAccess({ name, email, message })
      .pipe(tap(() => this._dialog.open(SuccessModalComponent)))
      .subscribe(() => {
        this.feedbackForm.patchValue(DEFAULT_FORM_VALUES);
      });
  }
}
