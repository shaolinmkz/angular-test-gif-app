import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SinglGiphyComponent } from './single-giphy/single-giphy.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'single-giphy/:id', component: SinglGiphyComponent },
    { path: '**', component: LandingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
