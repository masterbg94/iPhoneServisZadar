import {NgModule} from '@angular/core';

import {ToolbarComponent} from './toolbar.component';
import {RouterModule} from '@angular/router';
import {TranslateModule} from '@ngx-translate/core';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    RouterModule,
    TranslateModule,
    CommonModule
  ],
  exports: [ToolbarComponent],
  declarations: [ToolbarComponent]
})
export class ToolbarModule {
}
