import { Directive, Input, ViewContainerRef, TemplateRef } from "@angular/core";

@Directive({
  selector: "[appNgUnless]",
})
export class NgUnlessDirective {
  constructor(
    private viewContainerRef: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  @Input() set appNgUnless(condition: boolean) {
    if (!condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }
}
