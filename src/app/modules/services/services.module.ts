import {NgModule} from '@angular/core';
import {ServicesComponent} from './pages/services.component';
import {ServicesRoutingModule} from './services.routing.module';
import {AccessorizesModule} from '../../core/components/accessorizes/accessorizes.module';
import {ServicesDetailModule} from '../../core/components/services-detail/services-detail.module';

@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    ServicesRoutingModule,
    AccessorizesModule,
    ServicesDetailModule
  ],
  exports: []
})
export class ServicesModule {
}
