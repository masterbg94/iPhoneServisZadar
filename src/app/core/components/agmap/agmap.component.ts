import {Component} from '@angular/core';

@Component({
  selector: 'app-google-map-component',
  templateUrl: './agmap.component.html',
  styleUrls: ['./agmap.component.scss']
})
export class AgmapComponent {
  lat = 44.115663;
  lng = 15.260537;
  zoom = 15;
  disejblskrol = false;
}
