import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthGuard} from "../auth-guard.service";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";

const serversRoutes: Routes = [ // /servers prefix will be added by the app-routing.module.ts lazily
  {path: '', component: ShoppingListComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(serversRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShoppingRoutingModule {

}
