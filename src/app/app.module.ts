import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {CoreModule} from './core/core.module';
import {AppComponent} from './app.component';
import {ToolbarModule} from './core/components/toolbar/toolbar.module';
import {AppRoutingModule} from './app.routing.module';
import {FooterModule} from './core/components/footer/footer.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CustomMaterialModule} from './custom.material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ToolbarModule,
    AppRoutingModule,
    FooterModule,
    BrowserAnimationsModule,
    // CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
