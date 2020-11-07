import {NgModule} from '@angular/core';

import {AccessorizesComponent} from './accessorizes.component';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    AccessorizesComponent
  ],
  declarations: [
    AccessorizesComponent
  ]
})
export class AccessorizesModule {
}
