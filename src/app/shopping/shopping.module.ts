import {NgModule} from '@angular/core';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {SharedModule} from "../shared.module";
import {ShoppingRoutingModule} from "./shopping-routing.module";
import {StoreModule} from "@ngrx/store";
import {shoppingListReducer} from "./shopping-list/store/shopping-list.reducer";
import {EffectsModule} from "@ngrx/effects";
import {ShoppingListEffects} from "./shopping-list/store/shopping-list.effects";
import {ShoppingListService} from "./shopping-list.service";

@NgModule({
  declarations: [
    ShoppingListComponent
  ],
  imports: [
    SharedModule,
    StoreModule.forFeature('shoppingList', {list: shoppingListReducer}),
    EffectsModule.forFeature([ShoppingListEffects]),
    ShoppingRoutingModule
  ],
  providers: [ShoppingListService]
})
export class ShoppingModule {
}
