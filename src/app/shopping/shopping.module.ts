import {NgModule} from '@angular/core';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {SharedModule} from "../shared.module";
import {ShoppingRoutingModule} from "./shopping-routing.module";
import {StoreModule} from "@ngrx/store";
import {shoppingListReducer} from "./shopping-list/store/shopping-list.reducer";

@NgModule({
  declarations: [
    ShoppingListComponent
  ],
  imports: [
    SharedModule,
    StoreModule.forFeature('shoppingList', {list: shoppingListReducer}),
    ShoppingRoutingModule
  ]
})
export class ShoppingModule {
}
