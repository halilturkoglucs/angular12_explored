import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataFormPost} from "./data-form-post.model";
import {PostsService} from "./posts.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css'],
  providers: [PostsService]
})
export class DataFormComponent implements OnInit, OnDestroy {

  loadedPosts = [];
  isFetching = false;
  clearStatus = 'NONE';
  error = null;
  private errorSub: Subscription;

  constructor(private http: HttpClient, private postsService: PostsService) {
    console.log("a: " + postsService.id); // a new instance everytime since we provide it at component-level
  }

  ngOnInit() {
    this.errorSub = this.postsService.error.subscribe(error => {
      this.error = error;
    })

    this.onFetchPosts();
  }

  onAddPost(postData: DataFormPost) {
    this.postsService.addPost(postData.title, postData.content);
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(posts => {
      setTimeout(() => {
        this.error = null;
        this.loadedPosts = posts
        this.isFetching = false;
      }, 1500); // to simulate loading
    }, error => {
      this.error = error.message;
    });
  }

  onClearPosts() {
    this.postsService.clearPosts()
      .subscribe(() => {
        this.loadedPosts = [];
        this.clearStatus = 'SUCCESS';

        setTimeout(() => {
          this.clearStatus = 'NONE';
        }, 2000);
      });
  }

  ngOnDestroy() {
    this.errorSub.unsubscribe();
  }

}
