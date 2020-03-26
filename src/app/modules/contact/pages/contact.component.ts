import {Component} from '@angular/core';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  public headerData = {
    title: 'Contact Us',
    description: 'Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit' +
      ' vehicula odio. Vestibulum interdum,.....',
    // image: './assets/img/master-iphone1.png',
    image: './assets/img/illustrations/calling.svg',
    // background: 'linear-gradient(217deg, #735050 0%, #E0E0E0 100%)',
    // background: 'linear-gradient(360deg, #735050 0%, #212121 100%)'
  };
}
