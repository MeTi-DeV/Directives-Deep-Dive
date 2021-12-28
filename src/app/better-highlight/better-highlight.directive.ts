
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
export class BetterHighlightDirective implements OnInit {
  @HostBinding("style.backgroundColor") backgroundColor: string = "transparent";
  @Input() defaultColor: string = "transparent";
  @Input() highLightColor: string = "blue";
  constructor(private render: Renderer2, private elRef: ElementRef) {}
  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener("mouseenter") mouseover(eventData: Event) {
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
