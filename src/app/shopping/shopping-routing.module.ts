import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";

const shoppingRoutes: Routes = [ // /servers prefix will be added by the app-routing.module.ts lazily
  {path: '', component: ShoppingListComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(shoppingRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShoppingRoutingModule {

}
