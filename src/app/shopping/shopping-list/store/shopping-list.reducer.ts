import {Action} from "@ngrx/store";
import * as ShoppingListActions from "./shopping-list.actions";

const initialState = {
  items: ['Initial Item'],
  name: 'Default Name'
};

export function shoppingListReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ShoppingListActions.ADD_SHOPPING_LIST:
      return {
        ...state,
        items: [...state.items, (<ShoppingListActions.AddShoppingList>action).payload]
      };
    case ShoppingListActions.DELETE_SHOPPING_LIST:
      return {
        ...state,
        items: []
      };
    case ShoppingListActions.SET_SHOPPING_LIST_NAME:
      return {
        ...state,
        name: (<ShoppingListActions.SetShoppingListName> action).payload
      }
    default:
      return state;
  }

}
