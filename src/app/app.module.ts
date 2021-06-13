import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from "@angular/common/http";

import {AppComponent} from './app.component';
import {HighlightBackgroundDirective} from './highlight-background/highlight-background.directive';
import {HomeComponent} from "./home/home.component";
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LoginComponent} from './login/login.component';
import {LogoutComponent} from './logout/logout.component';
import {PageNotFoundResolver} from "./page-not-found/page-not-found-resolver.service";
import {UserFormComponent} from "./user-form/user-form.component";
import {UserFormReactiveComponent} from './user-form-reactive/user-form-reactive.component';
import {DataFormComponent} from './data-form/data-form.component';
import {AuthInterceptorService} from "./auth-interceptor.service";
import {AuthLoggingInterceptorService} from "./auth-logging-interceptor.service";
import {SharedModule} from "./shared.module";
import {PageNotFoundRoutingModule} from "./page-not-found/page-not-found-routing.module";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "./app-routing.module";
import {StoreModule} from "@ngrx/store";
import {environment} from "../environments/environment";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {EffectsModule} from "@ngrx/effects";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HighlightBackgroundDirective,
    PageNotFoundComponent,
    LoginComponent,
    LogoutComponent,
    UserFormComponent,
    UserFormReactiveComponent,
    DataFormComponent
  ],
  imports: [
    StoreModule.forRoot({}),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      // logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot(),
    // ServersModule, # Eager-load -> Switched to lazy-load
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    PageNotFoundRoutingModule // this should be the last, otherwise it captures '**' not found wildcard for other module's routes
  ],
  providers: [PageNotFoundResolver,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: AuthLoggingInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
