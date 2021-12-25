import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { basicHighlightDirective } from "./basic-highlight/basic-highlight.directive";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [basicHighlightDirective, AppComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
