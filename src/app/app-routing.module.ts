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
  { path: 'music', component: MusicComponent },
  { path: 'linktree/login', component: LoginComponent },
  { path: 'linktree/artist/:artist', component: LinktreeArtistComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
