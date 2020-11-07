import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {WhyusComponent} from './whyus.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    WhyusComponent
  ],
  declarations: [
    WhyusComponent
  ]
})
export class WhyusModule {
}
