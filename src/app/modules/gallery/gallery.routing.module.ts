import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { InstagramGalleryComponent } from 'src/app/core/components/instagram-gallery/instagram-gallery.component';


const ROUTES: Routes = [
    {
      path: '',
      component: InstagramGalleryComponent
    }
  ];

@NgModule({
    imports:[RouterModule.forChild(ROUTES)],
    exports:[RouterModule]
})
export class GalleryRoutingModule{
}