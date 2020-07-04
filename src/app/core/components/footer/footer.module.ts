import {NgModule} from '@angular/core';

import {FooterComponent} from './footer.component';
import {WebsiteTermsModule} from '../website-terms/website-terms.module';

@NgModule({
  imports: [
    WebsiteTermsModule
  ],
  exports: [FooterComponent],
  declarations: [FooterComponent]
})
export class FooterModule {
}
