import {NgModule} from '@angular/core';
import {WebsiteTermsComponent} from './website-terms.component';
import {CustomMaterialModule} from '../../../custom.material.module';

@NgModule({
  imports: [
    CustomMaterialModule
  ],
  exports: [],
  declarations: [WebsiteTermsComponent],
  entryComponents: [WebsiteTermsComponent]
})
export class WebsiteTermsModule {
}
