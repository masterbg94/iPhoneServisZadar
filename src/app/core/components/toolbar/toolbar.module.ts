import {NgModule} from '@angular/core';

import {ToolbarComponent} from './toolbar.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    RouterModule
  ],
  exports: [ToolbarComponent],
  declarations: [ToolbarComponent]
})
export class ToolbarModule {
}
