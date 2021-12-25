//comment 1 : better way to create a new Directive is : ng g d diarective name --skip-tests = true

import {
  Directive,
  OnInit,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
  Input,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
//comment 2 : after that our directive created it's better way to use Renderer2 to set properties
// to our style
export class BetterHighlightDirective implements OnInit {
  @HostBinding("style.backgroundColor") backgroundColor: string = "transparent";
  //comment 5 : an other way to binding properties is to use properties as Input property
  //now inside my HTML file I can use these to properties
  @Input() defaultColor: string = "transparent";
  @Input() highLightColor: string = "blue";
  constructor(private render: Renderer2, private elRef: ElementRef) {}
  ngOnInit() {
    //comment 6 : here I set default color as transparent
    this.backgroundColor = this.defaultColor;
    // this.render.setStyle(this.elRef.nativeElement, "background-color", "blue");
  }
  //comment 4 : a better way to do this hovering is to use @HostBinding it use style properties instead
  // from DOM and do changes on that  like here call style.backgroundColor and change color
  //comment 3 : @HostListener is for hover mouse to element and change background color
  @HostListener("mouseenter") mouseover(eventData: Event) {
    // this.render.setStyle(this.elRef.nativeElement, "background-color", "blue");
    this.backgroundColor = this.defaultColor;
  }
  @HostListener("mouseleave") mouseleave(eventData: Event) {
    // this.render.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "transparent"
    // );
    this.backgroundColor = this.highLightColor;
  }
}
