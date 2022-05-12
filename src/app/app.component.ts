import {
  Component,
  ComponentFactoryResolver,
  VERSION,
  ViewChild,
} from '@angular/core';
import { HelloComponent, hiComponent } from './hello.component';
import { HostDirective } from './host.directive';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  display = true;
  name = 'Angular ' + VERSION.major;
  show() {}
  @ViewChild(HostDirective, { static: true }) childRef: HostDirective;
  components = [HelloComponent, hiComponent];
  constructor(public cmpres: ComponentFactoryResolver) {}

  loadComponent(id) {
    this.childRef.viewref.clear();
    const resolvefac = this.cmpres.resolveComponentFactory(this.components[id]);
    this.childRef.viewref.createComponent(resolvefac);
  }
}
