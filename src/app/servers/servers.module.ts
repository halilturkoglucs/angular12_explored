import {NgModule} from "@angular/core";
import {ServersComponent} from "./servers.component";
import {ServerComponent} from "../server/server.component";
import {ServerSpecsComponent} from "../server-specs/server-specs.component";
import {SharedModule} from "../shared.module";
import {ServerFilterPipe} from "../serverfilter.pipe";
import {ServersRoutingModule} from "./servers-routing.module";

@NgModule({
  declarations: [
    ServersComponent,
    ServerComponent,
    ServerSpecsComponent,
    ServerFilterPipe
  ],
  imports: [
    SharedModule,
    ServersRoutingModule
  ],
  exports: []
})
export class ServersModule {

}
