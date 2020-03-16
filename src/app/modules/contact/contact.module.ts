import {NgModule} from '@angular/core';

import {ContactComponent} from './pages/contact.component';
import {ContactRoutingModule} from './contact.routing.module';
import {AgmapModule} from '../../core/components/agmap/agmap.module';

@NgModule({
  imports: [
    ContactRoutingModule,
    AgmapModule
  ],
  declarations: [
    ContactComponent
  ]
})
export class ContactModule {
}
