import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appstruct]',
})
export class StructDirective {
  rendered = false;
  @Input() set appstruct(value) {
    if (value && !this.rendered) {
      this.container.createEmbeddedView(this.template);
      this.rendered = true;
    } else if (!value && this.rendered) {
      this.container.clear();
      this.rendered = true;
    }
  }
  constructor(
    public template: TemplateRef<any>,
    public container: ViewContainerRef
  ) {}
}
