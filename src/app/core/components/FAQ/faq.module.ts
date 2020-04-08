import {NgModule} from '@angular/core';

import {FaqComponent} from './faq.component';

import {CustomMaterialModule} from '../../../custom.material.module';

@NgModule({
  imports: [
    CustomMaterialModule
  ],
  exports: [
    FaqComponent
  ],
  declarations: [
    FaqComponent
  ]
})
export class FaqModule {
}
