import {NgModule} from '@angular/core';

import {AboutUsShortComponent} from './about-us-short.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    TranslateModule
  ],
  exports: [
    AboutUsShortComponent
  ],
  declarations: [
    AboutUsShortComponent
  ]
})
export class AboutUsShortModule {
}
