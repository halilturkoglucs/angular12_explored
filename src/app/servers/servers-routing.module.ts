import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "../auth-guard.service";
import {ServerComponent} from "../server/server.component";
import {ServerSpecsComponent} from "../server-specs/server-specs.component";
import {ServersComponent} from "./servers.component";

const serversRoutes: Routes = [ // /servers prefix will be added by the app-routing.module.ts lazily
  {path: '', canActivate: [AuthGuard], component: ServersComponent},
  {path: ':id', canActivateChild: [AuthGuard], component: ServerComponent, children: [
      {path: 'specs', component: ServerSpecsComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(serversRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ServersRoutingModule {

}
