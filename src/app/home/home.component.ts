import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable, Observer, Subscription} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  tick: number;

  private intervalSubscription: Subscription;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.router.navigate(['/servers'], {
    //   relativeTo: this.route,
    //   queryParams: {redirectedFrom: '/home'},
    //   fragment: 'abc',
    //   queryParamsHandling: 'merge'
    // });

    // this.intervalSubscription = interval(1000).subscribe(count => {
    //   this.tick = count;
    // });

    // this.intervalSubscription = new Observable((observer: Observer<any>) => {
    //   let count = 0;
    //   setInterval(() => {
    //     observer.next(count++);
    //     if (count == 10) observer.complete();
    //     if (count > 10) observer.error("Count cannot be greater than 10");
    //   }, 1000);
    // }).pipe(map((count: number) => {
    //   return count + 2;
    // })).subscribe(count => {
    //     this.tick = count;
    //     console.log(count);
    //   }, error => {
    //     console.log(error);
    //   }
    // );
  }

  ngOnDestroy(): void {
    // this.intervalSubscription.unsubscribe();
  }

}
