import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {ContactFormComponent} from './contact-form.component';
import {CustomMaterialModule} from '../../../custom.material.module';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CustomMaterialModule,
    ReactiveFormsModule,
    CommonModule,
    TranslateModule
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
