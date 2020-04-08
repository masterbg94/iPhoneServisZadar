import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {ContactFormComponent} from './contact-form.component';
import {CustomMaterialModule} from '../../../custom.material.module';

@NgModule({
  imports: [
    CustomMaterialModule,
    ReactiveFormsModule,
    CommonModule
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
