import {NgModule} from '@angular/core';

import {FooterComponent} from './footer.component';
import {WebsiteTermsModule} from '../website-terms/website-terms.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    WebsiteTermsModule,
    RouterModule
  ],
  exports: [FooterComponent],
  declarations: [FooterComponent]
})
export class FooterModule {
}
