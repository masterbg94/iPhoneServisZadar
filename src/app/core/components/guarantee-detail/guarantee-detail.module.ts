import {NgModule} from '@angular/core';

import {GuaranteeDetailComponent} from './guarantee-detail.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    TranslateModule
  ],
  exports: [
    GuaranteeDetailComponent
  ],
  declarations: [
    GuaranteeDetailComponent
  ]
})
export class GuaranteeDetailModule {
}
