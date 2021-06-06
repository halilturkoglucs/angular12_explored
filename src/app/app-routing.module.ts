import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {ServersComponent} from "./servers/servers.component";
import {ServerComponent} from "./server/server.component";
import {ServerSpecsComponent} from "./server-specs/server-specs.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AuthGuard} from "./auth-guard.service";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import {PageNotFoundResolver} from "./page-not-found/page-not-found-resolver.service";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'servers', canActivate: [AuthGuard], component: ServersComponent},
  {
    path: 'servers/:id', canActivateChild: [AuthGuard], component: ServerComponent, children: [
      {path: 'specs', component: ServerSpecsComponent}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'not-found', component: PageNotFoundComponent, data: {message: 'Page not found!'}, resolve: {resolverMsg: PageNotFoundResolver}},
  {path: '**', redirectTo: '/not-found'} // make sure this is the last one
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: false})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
