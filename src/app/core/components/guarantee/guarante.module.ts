import {NgModule} from '@angular/core';

import {GuaranteComponent} from './guarante.component';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    GuaranteComponent
  ],
  declarations: [
    GuaranteComponent
  ]
})
export class GuaranteModule {
}
