import {NgModule} from '@angular/core';

import {HomeRoutingModule} from './home.routing.module';
import {HomeComponent} from './pages/home.component';
import {HeaderDetailsModule} from '../../core/components/header-details/header-details.module';
import {WhyusModule} from '../../core/components/whyus/whyus.module';
import {AboutUsShortModule} from '../../core/components/about-us-short/about-us-short.module';
import {AccessorizesModule} from '../../core/components/accessorizes/accessorizes.module';
import {GuaranteModule} from '../../core/components/guarantee/guarante.module';
import {FaqModule} from '../../core/components/FAQ/faq.module';

@NgModule({
  imports: [
    HomeRoutingModule,
    HeaderDetailsModule,
    WhyusModule,
    AboutUsShortModule,
    AccessorizesModule,
    GuaranteModule,
    FaqModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {
}
