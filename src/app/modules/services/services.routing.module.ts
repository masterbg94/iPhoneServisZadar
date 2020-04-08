import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ServicesComponent} from './pages/services.component';

const ROUTES: Routes = [
  {
    path: '',
    component: ServicesComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule]
})
export class ServicesRoutingModule {
}
