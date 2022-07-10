import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ToolsComponent } from './tools/tools.component';
import { LinktreeComponent } from './linktree/linktree.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ToolsComponent,
    LinktreeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, AmplifyAuthenticatorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
