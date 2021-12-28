import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { basicHighlightDirective } from "./basic-highlight/basic-highlight.directive";
import { AppComponent } from "./app.component";
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless-directive/unless.directive';

@NgModule({
  declarations: [basicHighlightDirective, AppComponent, BetterHighlightDirective, UnlessDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
