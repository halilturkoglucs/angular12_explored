import {DataFormPost} from "./data-form-post.model";
import {HttpClient, HttpEventType, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, map, tap} from "rxjs/operators";
import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class PostsService {

  error = new Subject<string>();

  urlBase = 'https://ng-complete-guide-7bb3d-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient) {
  }

  addPost(title: string, content: string) {
    const post: DataFormPost = {title: title, content: content};

    // Send Http request
    this.http
      .post<{ name: string }>(
        this.urlBase + '/posts.json',
        post,
        {
          observe: 'response'
        }
      )
      .subscribe(responseData => {
        console.log(responseData);
      }, error => {
        this.error.next(error.message);
      });
  }

  fetchPosts() {
    return this.http.get<{ [key: string]: DataFormPost }>(this.urlBase + '/posts.json',
      {
        headers: new HttpHeaders({
          'Custom-Header': 'Hello'
        }),
        params: new HttpParams().appendAll({
          'print': 'pretty',
          'custom': 'key'
        })
      })
      .pipe(map(posts => {
          const postsArray: DataFormPost[] = [];

          for (const key in posts) {
            postsArray.push({...posts[key], id: key});
          }

          return postsArray;
        }),
        catchError(error => { // new observable
          // return throwError(error);
          throw {'message' : 'Err msg from catchError function'}; // sned to error function of the subscriber
          // return of(['Errrr']) // if you want to send to subscribe method of the subscriber
        }));
  }

  clearPosts() {
    return this.http.delete(this.urlBase + '/posts.json',
      {
        observe: 'events',
        responseType: 'text'
      }).pipe(
        tap(event => {
          if (event.type === HttpEventType.Sent) console.log(event);
          if (event.type === HttpEventType.Response) console.log(event.body);
        })
    );
  }
}
