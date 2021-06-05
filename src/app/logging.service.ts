import {EventEmitter, Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  id: number = Math.random();

  logAdded = new EventEmitter<string>();

  logToConsole(message: any) {
    console.log(message);
  }

  getId() {
    return this.id;
  }
}
