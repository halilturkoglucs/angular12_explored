import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'serverFilter',
  pure: false // recalculates for every change in a page
})
export class ServerFilterPipe implements PipeTransform {
  transform(servers: any, filterString: string, propName: string): any {
    if (servers.length === 0) {
      return servers;
    }

    const filtered = [];

    for (const server of servers) { // value is array
      if (server === filterString) filtered.push(server);
    }

    return filtered;
  }
}
