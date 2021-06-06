import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

interface RouterMessage {
  routeMsg: string;
}

export class PageNotFoundResolver implements Resolve<RouterMessage> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RouterMessage> | Promise<RouterMessage> | RouterMessage {
    return {'routeMsg': window.document.location.href};
  }
}
