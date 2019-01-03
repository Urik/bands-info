import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistDisplayViewComponent } from './artist-display-view/artist-display-view.component';

const routes: Routes = [
  { path: 'band/:bandName', component:  ArtistDisplayViewComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
