import {NgModule} from '@angular/core';

import {AboutRoutingModule} from './about.routing.module';
import {AboutComponent} from './pages/about.component';
import {ContactFormModule} from '../../core/components/contact-form/contact-form.module';

@NgModule({
  imports: [
    AboutRoutingModule,
    ContactFormModule
  ],
  exports: [],
  declarations: [AboutComponent]
})
export class AboutModule {
}
