import {Injectable} from "@angular/core";
import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {DataFormPost} from "./data-form/data-form-post.model";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Before request interceptor (info: AuthInterceptorService)');

    const modifiedRequest = req.clone({
      headers: req.headers.append('Auth', 'Some auth header')
    });

    return next.handle(modifiedRequest).pipe(map(event => {
      if (event.type === HttpEventType.Response) {
        // change the response body here
        if (event.body) {
          event.body['element-added-by-interceptor'] = {
            'title': 'Added by interceptor',
            'content': 'Added by interceptor'
          };
        }

        return event;
      }

      return event;
    }));
  }
}
