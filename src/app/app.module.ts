import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent, hiComponent } from './hello.component';
import { HostDirective } from './host.directive';
import { HostComponent } from './hostlistenerandbinding.component';
import { ListDirective } from './list.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HostDirective,
    hiComponent,
    HostComponent, ListDirective
  ],
  entryComponents: [HelloComponent, hiComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
