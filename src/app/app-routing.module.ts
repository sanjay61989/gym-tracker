import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/gym', pathMatch: 'full' }, // Redirect to gym module by default
  {
    path: 'gym',
    loadChildren: () => import('./gym/gym.module').then((m) => m.GymModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
