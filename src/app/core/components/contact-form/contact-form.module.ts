import {NgModule} from '@angular/core';

import {ContactFormComponent} from './contact-form.component';
import {CustomMaterialModule} from '../../../custom.material.module';

@NgModule({
  imports: [
    CustomMaterialModule
  ],
  exports: [
    ContactFormComponent
  ],
  declarations: [
    ContactFormComponent
  ]
})
export class ContactFormModule {
}
