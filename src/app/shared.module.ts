import {NgModule} from "@angular/core";
import {AlertBoxComponent} from "./alert-box/alert-box.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {ShortenPipe} from "./shorten.pipe";
import {AppRoutingModule} from "./app-routing.module";
import {UnlessDirective} from "./unless/unless.directive";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AlertBoxComponent,
    ShortenPipe,
    UnlessDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AlertBoxComponent,
    ShortenPipe,
    UnlessDirective
  ]
})
export class SharedModule {

}
