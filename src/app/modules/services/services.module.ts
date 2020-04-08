import {NgModule} from '@angular/core';
import {ServicesComponent} from './pages/services.component';
import {ServicesRoutingModule} from './services.routing.module';
import {AccessorizesModule} from '../../core/components/accessorizes/accessorizes.module';

@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    ServicesRoutingModule,
    AccessorizesModule
  ],
  exports: []
})
export class ServicesModule {
}
