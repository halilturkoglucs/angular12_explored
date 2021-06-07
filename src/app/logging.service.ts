import {EventEmitter, Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  id: number = Math.random();

  // logAdded = new EventEmitter<string>();
  logAdded = new Subject<string>();

  logToConsole(message: any) {
    console.log(message);
  }

  getId() {
    return this.id;
  }
}
