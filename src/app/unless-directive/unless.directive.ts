import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
//comment 1  : here I  create new directive as binding value to that
// like ngIf , ngfor , ... that should be began with *
// this directive work like ngIf that defined
@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // comment 2 : always need to know it's a property of my directive
  @Input() set appUnless(conditon: boolean) {
    if (!conditon) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {
  }

}
