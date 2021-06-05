import {LoggingService} from "./logging.service";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ServersService {
  servers = [];

  constructor(private loggingService: LoggingService) {
  }

  addServer(name: string) {
    this.servers.push(name);
    this.loggingService.logToConsole("New server added: " + name);
  }

  getServers() {
    return this.servers;
  }
}
