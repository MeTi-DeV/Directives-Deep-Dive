// comment 1 : create my first directive
import { Directive, ElementRef, OnInit } from "@angular/core";
// comment 2 : add Directive from angular/core
 //and inside it choose selector name (property name)
 // used brackets for selector name to use it as property

@Directive({
  selector: "[appBasicHighlight]",
})
//comment 3 : after create class and define elementRef as private value
//comment 4 : call elementRef inside of OnInit and choose style.background property as Green
export class basicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}
  ngOnInit() {
    this.elementRef.nativeElement.style.background = "Green";
  }
}
