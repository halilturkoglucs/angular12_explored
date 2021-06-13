import {Action} from "@ngrx/store";

export const ADD_SHOPPING_LIST_ITEM_START = 'ADD_SHOPPING_LIST_ITEM_START';
export const ADD_SHOPPING_LIST_ITEM_SAVED = 'ADD_SHOPPING_LIST_ITEM_SAVED';
export const DELETE_SHOPPING_LIST = 'DELETE_SHOPPING_LIST';
export const SET_SHOPPING_LIST_NAME = 'SET_SHOPPING_LIST_NAME';

export class AddShoppingListStart implements Action {
  readonly type = ADD_SHOPPING_LIST_ITEM_START;

  constructor(public payload: string) {
  }
}

export class AddShoppingListSaved implements Action {
  readonly type = ADD_SHOPPING_LIST_ITEM_SAVED;

  constructor(public payload: string) {
  }
}

export class DeleteShoppingList implements Action {
  readonly type = DELETE_SHOPPING_LIST;
}

export class SetShoppingListName implements Action {
  readonly type = SET_SHOPPING_LIST_NAME;

  constructor(public payload: string) {
  }
}
