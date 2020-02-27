import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header-details-component',
  templateUrl: './header-details.component.html',
  styleUrls: ['./header-details.component.scss']
})
export class HeaderDetailsComponent {
  @Input() headerData;
}
