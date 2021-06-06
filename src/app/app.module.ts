import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {ServerComponent} from "./server/server.component";
import {ServersComponent} from './servers/servers.component';
import {HighlightBackgroundDirective} from './highlight-background/highlight-background.directive';
import {UnlessDirective} from "./unless/unless.directive";
import {HomeComponent} from "./home/home.component";
import {ServerSpecsComponent} from "./server-specs/server-specs.component";
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import {LoginComponent} from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import {PageNotFoundResolver} from "./page-not-found/page-not-found-resolver.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServerComponent,
    ServersComponent,
    ServerSpecsComponent,
    HighlightBackgroundDirective,
    UnlessDirective,
    PageNotFoundComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PageNotFoundResolver],
  bootstrap: [AppComponent]
})
export class AppModule {
}
