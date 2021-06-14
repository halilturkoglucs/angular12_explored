import {Component, Inject, OnDestroy, OnInit, PLATFORM_ID} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {animate, group, keyframes, state, style, transition, trigger} from "@angular/animations";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('tickAnimation', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800))
    ]),
    trigger('wildState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        backgroundColor: 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        backgroundColor: 'green',
        transform: 'translateX(0) scale(0.5)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => shrunken', animate(800)),
      transition('shrunken <=> *', [
        style({
          'background-color': 'orange'
        }),
        animate(1000, style({
          borderRadius: '50px'
        })),
        animate(500)
      ]),
    ]),
    trigger('withVoid', [
      state('normal', style({
        'background-color': 'gray',
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => normal', [ // void is the beginning state - before the element was inserted into the DOM
        group([ // the animations defined in this group, run in parallel
          animate(300, style({
            'background-color': 'gray',
            opacity: 1
          })),
          animate(200, style({
            transform: 'translateX(-50px)',
            offset: 0.5
          }))
        ]),
        animate(500, keyframes([
          style({
            'background-color': 'gray',
            opacity: 1,
            transform: 'translateX(-20px)',
            offset: 1
          })
        ]))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit, OnDestroy {

  tick: number = 0;
  state = 'normal';
  wildState = 'normal';
  withVoidState = 'normal';

  private intervalSubscription: Subscription;

  constructor(private router: Router, private route: ActivatedRoute, @Inject(PLATFORM_ID) private _platformId: Object) {
  }

  ngOnInit() {
    // WARNING: settimeout does not run on SRR since it's a dom function
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

    if (isPlatformBrowser(this._platformId)) {
      setInterval(() => {
        this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal';
        // this.withVoidState === 'normal' ? this.withVoidState = 'highlighted' : this.withVoidState = 'normal';

        if (this.wildState === 'normal') {
          this.wildState = 'highlighted';
        } else if (this.wildState === 'highlighted') {
          this.wildState = 'shrunken';
        } else {
          this.wildState = 'normal';
        }
      }, 2000);
    }
  }

  ngOnDestroy(): void {
    // this.intervalSubscription.unsubscribe();
  }

  animationLogs(event) {
    console.log(event)
  }

}
