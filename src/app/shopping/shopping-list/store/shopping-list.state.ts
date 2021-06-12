export interface ShoppingListModuleState {
  shoppingList: ShoppingListState
}

export interface ShoppingListState {
  list: ShoppingList;
}

export class ShoppingList {
  items: string[];
  name: string;
}
