import {AfterContentInit, Component, OnChanges, OnDestroy, OnInit} from "@angular/core";

@Component({
  selector: 'app-server-specs',
  templateUrl: './server-specs.component.html',
  styleUrls: ['./server-specs.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom,
  providers: []
})
export class ServerSpecsComponent {
  specs = [{spec: 'Spec1', desc: 'Description1'}, {spec: 'Spec2', desc: 'Description2'}];

  constructor() {
    console.log("hehe")
  }
}
