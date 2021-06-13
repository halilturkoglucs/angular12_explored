import {Injectable} from "@angular/core";
import {Observable, Observer} from "rxjs";

@Injectable()
export class ShoppingListService {

  addShoppingListItem(item) {
    return new Observable((observer: Observer<any>) => {
      setInterval(() => {
        observer.next(item);
        observer.complete();
      }, 2000);
    });
  }
}
