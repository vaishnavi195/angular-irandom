import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appList]',
})
export class ListDirective {
  @Input() highlightcolor;
  constructor(public elref: ElementRef) {
    this.elref.nativeElement.style.color = 'yellow';
  }

  @HostListener('mouseover') function() {
    this.elref.nativeElement.style.color = this.highlightcolor;
  }

  @HostListener('mouseleave') function1() {
    this.elref.nativeElement.style.color = 'green';
  }
}
