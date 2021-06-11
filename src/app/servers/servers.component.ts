import {Component, OnInit, ViewChild} from '@angular/core';
import {LoggingService} from "../logging.service";
import {ServersService} from "../servers.service";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  styleUrls: ['./servers.component.css'],
  // encapsulation: ViewEncapsulation.None
  providers: []
})
export class ServersComponent implements OnInit {

  name = '';
  status = 'loading';
  allowNewServer = false;
  servers: { name: string }[] = [];
  lastConfirmedId: number;
  serverAdded = false;
  @ViewChild('contentInput') contentInput;

  constructor(private loggingService: LoggingService,
              private serversService: ServersService) {
    setTimeout(() => {
      this.allowNewServer = true;

      this.loggingService.logToConsole(this.contentInput);
    }, 500);
  }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onChangeStatus(button) {
    this.status = 'Status Changed';
    this.serversService.addServer(this.name);
    this.loggingService.logToConsole(this.servers);
    this.loggingService.logToConsole(button);

    this.serverAdded = true;
  }

  log(e) {
    console.log(e);
  }

  onUpdateServerName(event: any) {
    this.name = event.target.value;
  }

  determineBackgroundColor(index: any) {
    return index >= 3 ? 'black' : '';
  }

  onAdditionConfirmed(event: number) {
    console.log('aa');
    this.lastConfirmedId = event;
    console.log(this.lastConfirmedId);
  }

  onAlertBoxClose() {
    this.status = 'Alert Box Closed';
  }
}
