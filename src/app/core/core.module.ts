import { NgModule, Optional, SkipSelf } from '@angular/core';

/**
 * The core module is used to hold all root-level providers.
 * It should only be imported in the AppModule (Application Root Module).
 *
 * @since 1.0.0
 */
@NgModule({
  // Place all forRoot() imports here
  imports: [

  ],
  // Place all services/providers/injection tokens here
  providers: [
    // Provide your app wide services here
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the root module only');
    }
  }
}
