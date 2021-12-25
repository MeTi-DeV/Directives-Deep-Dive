//comment 1 : better way to create a new Directive is : ng g d diarective name --skip-tests = true

import {
  Directive,
  OnInit,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
//comment 2 : after that our directive created it's better way to use Renderer2 to set properties
// to our style
export class BetterHighlightDirective implements OnInit {
  constructor(private render: Renderer2, private elRef: ElementRef) {}
  ngOnInit() {
    this.render.setStyle(this.elRef.nativeElement, "background-color", "blue");
  }
  //comment 4 : a better way to do this hovering is to use @HostBinding it use style properties instead
  // from DOM and do changes on that  like here call style.backgroundColor and change color
  @HostBinding("style.backgroundColor") backgroundColor: string = "transparent";
  //comment 3 : @HostListener is for hover mouse to element and change background color
  @HostListener("mouseenter") mouseover(eventData: Event) {
    // this.render.setStyle(this.elRef.nativeElement, "background-color", "blue");
    this.backgroundColor = "blue";
  }
  @HostListener("mouseleave") mouseleave(eventData: Event) {
    // this.render.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "transparent"
    // );
    this.backgroundColor = "transparent";
  }
}
