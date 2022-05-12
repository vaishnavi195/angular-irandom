import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appstruct]',
})
export class StructDirective {
  rendered = false;
  @Input() set appstruct(value) {
    if (value && !this.rendered) {
      this.container.createEmbeddedView(this.template);
    } else if (!value && this.rendered) {
      this.container.clear();
    }
  }
  constructor(
    public template: TemplateRef<any>,
    public container: ViewContainerRef
  ) {}
}
