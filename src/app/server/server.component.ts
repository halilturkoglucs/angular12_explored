import {
  AfterContentInit,
  Component,
  ContentChild,
  EventEmitter,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from "@angular/core";
import { LoggingService } from "../logging.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom,
  providers: []
})
export class ServerComponent implements OnInit, AfterContentInit, OnChanges, OnDestroy {
  serverId: number = 10;
  serverStatus = 'Offline';
  showRedirect = false;
  loggingSubscription: Subscription;
  @Input() show = false;

  @Input('i') index: number;
  @Output('aConfirmed') additionConfirmed = new EventEmitter();
  @ContentChild('parentParagh') parentParagh;

  // constructor -> ngOnInit -> ngAfterViewInit
  // ngOnChanges - when @input vars change
  // ngDoCheck - called for every change detection run
  // ngAfterContentInit - after (ng-content) has been projected into view -> ngAfterContentChecked
  // ngAfterViewInit (after the view and the child views all are initialized)
  // ngAfterViewChecked (with children)
  // ngOnDestroy

  constructor(private loggingService : LoggingService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.serverStatus = Math.random() >= 0.5 ? 'Online' : 'Offline';
    this.loggingService.logAdded.subscribe(
      (log: string) => console.log("LogAdded Event Received: " + log)
    );

    setTimeout(() => {
      this.additionConfirmed.emit(this.index);
    }, 1000);

    var idFromPath = this.route.snapshot.params['id'];
    if (idFromPath) {
      this.serverId = idFromPath;
      this.showRedirect = true;
    }
  }

  ngAfterContentInit(): void {
    this.loggingSubscription = this.route.params.subscribe((params: Params) => {
      this.serverId = params['id'];
    });

    this.loggingService.logToConsole("bb" + this.parentParagh);
    this.loggingService.logAdded.next(this.parentParagh);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnDestroy() {
    this.loggingSubscription.unsubscribe();
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus == 'Online' ? {'online': true} : {'offline': true};
  }

  getColor2() {
    return this.serverStatus == 'Online' ? 'online back' : 'offline back';
  }

  getDirectStyleColor() {
    return this.serverStatus == 'Online' ? 'green' : 'red';
  }
}
