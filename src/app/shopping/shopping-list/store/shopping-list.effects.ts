import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ADD_SHOPPING_LIST_ITEM_START, AddShoppingListSaved, AddShoppingListStart} from "./shopping-list.actions";
import {catchError, map, mergeMap} from "rxjs/operators";
import {ShoppingListService} from "../../shopping-list.service";
import {throwError} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable()
export class ShoppingListEffects {

  addShoppingListItem = createEffect(() => {
    return this.actions$.pipe(
      ofType(ADD_SHOPPING_LIST_ITEM_START),
      mergeMap((action: AddShoppingListStart) => this.shoppingListService.addShoppingListItem(action.payload).pipe(
        map(item => new AddShoppingListSaved(item)),
        catchError(error => throwError(error)) // you can send a new action here even of(<new-action>)
        )
      )
    );
  });

  constructor(private actions$: Actions, private shoppingListService: ShoppingListService) { //$ sign for observable - naming conventions
  }
}
