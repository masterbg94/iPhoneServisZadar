import {NgModule} from '@angular/core';

import {AgmapComponent} from './agmap.component';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDf0Z-oUxKPN65T17S_6eLWwyVc74UW4-A'
    })
  ],
  exports: [
    AgmapComponent
  ],
  declarations: [
    AgmapComponent
  ]
})
export class AgmapModule {
}

