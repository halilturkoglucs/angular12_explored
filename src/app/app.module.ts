import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {ServerComponent} from "./server/server.component";
import {ServersComponent} from './servers/servers.component';
import {HighlightBackgroundDirective} from './highlight-background/highlight-background.directive';
import {UnlessDirective} from "./unless/unless.directive";
import {HomeComponent} from "./home/home.component";

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'servers', component: ServersComponent},
  { path: 'servers/:id', component: ServerComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServerComponent,
    ServersComponent,
    HighlightBackgroundDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
