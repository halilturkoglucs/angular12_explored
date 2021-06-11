import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PageNotFoundComponent} from "./page-not-found.component";
import {PageNotFoundResolver} from "./page-not-found-resolver.service";

const routes: Routes = [
  {
    path: 'not-found',
    component: PageNotFoundComponent,
    data: {message: 'Page not found!'},
    resolve: {resolverMsg: PageNotFoundResolver}
  },
  {path: '**', redirectTo: '/not-found'} // make sure this is the last one
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PageNotFoundRoutingModule {

}
