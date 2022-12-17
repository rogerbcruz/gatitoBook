import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: () =>
      import('src/app/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'animais',
    loadChildren: () =>
      import('src/app/animais/animais.module').then((m) => m.AnimaisModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
