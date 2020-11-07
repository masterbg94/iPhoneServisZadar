import {NgModule} from '@angular/core';

import {FooterComponent} from './footer.component';
import {WebsiteTermsModule} from '../website-terms/website-terms.module';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    WebsiteTermsModule,
    RouterModule,
    TranslateModule
  ],
  exports: [FooterComponent],
  declarations: [FooterComponent]
})
export class FooterModule {
}
