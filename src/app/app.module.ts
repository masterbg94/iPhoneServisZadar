import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {CoreModule} from './core/core.module';
import {AppComponent} from './app.component';
import {ToolbarModule} from './core/components/toolbar/toolbar.module';
import {AppRoutingModule} from './app.routing.module';
import {FooterModule} from './core/components/footer/footer.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomMaterialModule} from './custom.material.module';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    CustomMaterialModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
