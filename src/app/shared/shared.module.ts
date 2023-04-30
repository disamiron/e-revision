import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { TextComponent } from './components/text/text.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainComponent,
    TextComponent,
    ButtonComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    MaterialModule,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    TextComponent,
    ButtonComponent,
  ],
})
export class SharedModule {}
