import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { TextComponent } from './components/text/text.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { MaterialModule } from './material/material.module';
import { ImgComponent } from './components/img/img.component';
import { AboutComponent } from './components/about/about.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { WhyOurAppComponent } from './components/why-our-app/why-our-app.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { CircleButtonComponent } from './components/circle-button/circle-button.component';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { SuccessModalComponent } from './modals/success-modal/success-modal.component';
import { TranslocoRootModule } from '../transloco-root.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    TextComponent,
    ButtonComponent,
    ImgComponent,
    AboutComponent,
    HowItWorksComponent,
    WhyOurAppComponent,
    AdvantagesComponent,
    ReviewsComponent,
    CircleButtonComponent,
    ReviewCardComponent,
    SuccessModalComponent,
  ],
  imports: [CommonModule, MaterialModule, TranslocoRootModule],
  exports: [
    MaterialModule,
    TranslocoRootModule,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    TextComponent,
    ButtonComponent,
    ImgComponent,
    AboutComponent,
    HowItWorksComponent,
    WhyOurAppComponent,
    AdvantagesComponent,
    ReviewsComponent,
    CircleButtonComponent,
    ReviewCardComponent,
  ],
})
export class SharedModule {}
