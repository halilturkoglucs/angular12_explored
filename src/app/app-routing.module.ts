import {NgModule} from "@angular/core";
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {LogoutComponent} from "./logout/logout.component";
import {UserFormComponent} from "./user-form/user-form.component";
import {UserFormReactiveComponent} from "./user-form-reactive/user-form-reactive.component";
import {DataFormComponent} from "./data-form/data-form.component";
import {AuthGuard} from "./auth-guard.service";

const appRoutes: Routes = [
  {path: 'user-form', component: UserFormComponent},
  {path: 'user-form-reactive', component: UserFormReactiveComponent},
  {
    path: 'servers',
    canLoad: [AuthGuard],
    loadChildren: () => import('./servers/servers.module').then(loadedModule => loadedModule.ServersModule)
  },
  {
    path: 'shopping',
    loadChildren: () => import('./shopping/shopping.module').then(loadedModule => loadedModule.ShoppingModule)
  },
  {path: 'data-form', component: DataFormComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: false, preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled' })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
