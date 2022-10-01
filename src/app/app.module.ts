import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ToolsComponent } from './tools/tools.component';
import { LoginComponent } from './login/login.component';
import { LinktreeModule } from './linktree/linktree.module';
import { MusicComponent } from './music/music.component';
import { MusicCardComponent } from './music/music-card/music-card.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ToolsComponent,
    LoginComponent,
    MusicComponent,
    MusicCardComponent,
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    AmplifyAuthenticatorModule,
    LinktreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
