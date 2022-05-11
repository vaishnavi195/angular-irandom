import { Component, Input, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'host',
  template: `<h1 >Hellocxcvx {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`],
})
export class HostComponent {
  @Input() name: string;

  // @HostBinding('style.color')
  // color = 'red';

  // // change() {
  // //   this.color = 'blue';
  // // }

  // @HostListener('click') function() {
  //   this.color = 'blue';
  // }
}
