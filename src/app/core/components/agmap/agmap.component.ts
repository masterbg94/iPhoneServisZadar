import {Component} from '@angular/core';

@Component({
  selector: 'app-google-map-component',
  templateUrl: './agmap.component.html',
  styleUrls: ['./agmap.component.scss']
})
export class AgmapComponent {
  lat = 44.114979;
  lng = 15.260582;
  zoom = 15;
  disejblskrol = false;
}
