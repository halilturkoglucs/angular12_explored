import {Action} from "@ngrx/store";
import * as ShoppingListActions from "./shopping-list.actions";
import {ShoppingList} from "./shopping-list.state";

const initialState: ShoppingList = {
  items: ['Initial Item'],
  name: 'Default Name',
  itemBeingAdded: false
};

export function shoppingListReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ShoppingListActions.ADD_SHOPPING_LIST_ITEM_START:
      return {
        ...state,
        itemBeingAdded: true
      };
    case ShoppingListActions.ADD_SHOPPING_LIST_ITEM_SAVED:
      return {
        ...state,
        itemBeingAdded: false,
        items: [...state.items, (<ShoppingListActions.AddShoppingListSaved>action).payload]
      };
    case ShoppingListActions.DELETE_SHOPPING_LIST:
      return {
        ...state,
        items: []
      };
    case ShoppingListActions.SET_SHOPPING_LIST_NAME:
      return {
        ...state,
        name: (<ShoppingListActions.SetShoppingListName>action).payload
      }
    default:
      return state;
  }

}
