import { NgModule } from "@angular/core";
import { GalleryRoutingModule } from './gallery.routing.module';
import { InstagramGalleryModule } from 'src/app/core/components/instagram-gallery/instagram-gallery.module';
import { GalleryComponent } from './pages/gallery.component';

@NgModule({
    imports:[
        GalleryRoutingModule,
        InstagramGalleryModule
    ],
    declarations:[
        GalleryComponent
    ]
})
export class GalleryModule{
}