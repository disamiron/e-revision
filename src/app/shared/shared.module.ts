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
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    MaterialModule,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    TextComponent,
    ButtonComponent,
    ImgComponent,
    AboutComponent,
    HowItWorksComponent,
    WhyOurAppComponent,
  ],
})
export class SharedModule {}
