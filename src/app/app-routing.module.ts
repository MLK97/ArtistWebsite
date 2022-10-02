import { MusicDetailComponent } from './music/music-detail/music-detail.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { LinktreeArtistComponent } from './linktree/artist/artist.component';

import { HomeComponent } from './home/home.component';
import { ToolsComponent } from './tools/tools.component';
import { MusicComponent } from './music/music.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tools', component: ToolsComponent },
  {
    path: 'music',
    component: MusicComponent,
    children: [{ path: ':id', component: MusicDetailComponent }],
  },
  { path: 'linktree/login', component: LoginComponent },
  {
    path: 'linktree/artist/:artist',
    component: LinktreeArtistComponent,
    outlet: 'main',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
