import {NgModule} from '@angular/core';
import {ServicesDetailComponent} from './services-detail.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    TranslateModule
  ],
  exports: [ServicesDetailComponent],
  declarations: [ServicesDetailComponent]
})
export class ServicesDetailModule {
}
