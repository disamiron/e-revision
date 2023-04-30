import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { eRevisionValues } from './shared/constants';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { KitPageComponent } from './pages/kit-page/kit-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: eRevisionValues.kit,
    component: KitPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
