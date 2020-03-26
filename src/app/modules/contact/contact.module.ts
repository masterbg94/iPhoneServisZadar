import {NgModule} from '@angular/core';

import {ContactComponent} from './pages/contact.component';
import {ContactRoutingModule} from './contact.routing.module';
import {AgmapModule} from '../../core/components/agmap/agmap.module';
import {ContactFormModule} from '../../core/components/contact-form/contact-form.module';
import {HeaderDetailsModule} from '../../core/components/header-details/header-details.module';
import {FaqModule} from '../../core/components/FAQ/faq.module';
import {CustomMaterialModule} from '../../custom.material.module';

@NgModule({
  imports: [
    ContactRoutingModule,
    AgmapModule,
    ContactFormModule,
    HeaderDetailsModule,
    FaqModule,
    CustomMaterialModule
  ],
  declarations: [
    ContactComponent
  ]
})
export class ContactModule {
}
