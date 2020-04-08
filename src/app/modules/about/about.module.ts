import {NgModule} from '@angular/core';

import {AboutRoutingModule} from './about.routing.module';
import {AboutComponent} from './pages/about.component';
import {ContactFormModule} from '../../core/components/contact-form/contact-form.module';
import {AboutUsShortModule} from '../../core/components/about-us-short/about-us-short.module';
import {WhyusModule} from '../../core/components/whyus/whyus.module';
import {AccessorizesModule} from '../../core/components/accessorizes/accessorizes.module';
import {GuaranteModule} from '../../core/components/guarantee/guarante.module';
import {GuaranteeDetailModule} from '../../core/components/guarantee-detail/guarantee-detail.module';
import {ServicesDetailModule} from '../../core/components/services-detail/services-detail.module';
import {FaqModule} from '../../core/components/FAQ/faq.module';

@NgModule({
  imports: [
    AboutRoutingModule,
    ContactFormModule,
    AboutUsShortModule,
    WhyusModule,
    AccessorizesModule,
    GuaranteModule,
    GuaranteeDetailModule,
    ServicesDetailModule,
    FaqModule
  ],
  exports: [],
  declarations: [AboutComponent]
})
export class AboutModule {
}
