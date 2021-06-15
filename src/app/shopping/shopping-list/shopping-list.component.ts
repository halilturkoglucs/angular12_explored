import {Component, OnInit, ViewChild} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {AddShoppingListStart, DeleteShoppingList, SetShoppingListName} from "./store/shopping-list.actions";
import {ShoppingListModuleState} from "./store/shopping-list.state";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  items: Observable<string[]>; // unmanaged subscription since it and the below come from ngrx
  name: Observable<string>;
  itemBeingAdded: Observable<boolean>

  @ViewChild('shoppingItem') shoppingItem;

  constructor(private store: Store<ShoppingListModuleState>) {
  }

  ngOnInit(): void {
    // this.shoppingList = this.store.select('shoppingList'); // subscribe to the whole state for your feature module
    // this.store.select('shoppingList').subscribe((e) => {
    //   console.log(e)
    // });

    // this.store.select(state => {
    //   return state.shoppingList.list.items; // if you want to subscribe to the part of the state only
    // }).subscribe((e) => {
    //   console.log(e)
    // });

    this.items = this.store.select(state => {
      return state.shoppingList.list.items; // if you want to subscribe to the part of the state only
    });

    // this.store.select(state => {
    //   return state.shoppingList.list; // if you want to subscribe to the part of the state only
    // }).subscribe(e => {
    //   debugger;
    //   console.log(e)
    // });


    /***************************/
    this.name = this.store.select(state => {
      return state.shoppingList.list.name; // if you want to subscribe to the part of the state only
    });

    // this.name.subscribe((e) => {
    //   debugger
    //   console.log(e);
    // });

    this.itemBeingAdded = this.store.select(state => {
      return state.shoppingList.list.itemBeingAdded;
    });
  }

  onAddShoppingItem(el) {
    let action = new AddShoppingListStart(el.value);
    this.store.dispatch(action);
  }

  onDeleteShoppingItems() {
    this.store.dispatch(new DeleteShoppingList());
  }

  onSetShoppingListName(nameInput) {
    this.store.dispatch(new SetShoppingListName(nameInput.value))
  }
}
