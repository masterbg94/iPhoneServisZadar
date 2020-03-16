import {Component} from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public headerData = {
    title: 'Wellcome to iServis Zadar',
    description: 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi ' +
      'consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit' +
      ' vehicula odio. Vestibulum interdum',
    // image: './assets/img/master-iphone1.png',
    image: './assets/img/illustrations/calling.svg',
    // background: 'linear-gradient(217deg, #735050 0%, #E0E0E0 100%)',
    // background: 'linear-gradient(360deg, #735050 0%, #212121 100%)'
  };
}
