import {Component} from '@angular/core';

@Component({
  selector: 'app-whyus-component',
  templateUrl: './whyus.component.html',
  styleUrls: ['./whyus.component.scss']
})
export class WhyusComponent {
  whyUs = [
    {
      heading: 'freeAnalyze',
      icon: './assets/img/illustrations/analyze1.svg'
    },
    {
      heading: 'fastService',
      icon: './assets/img/illustrations/time2.svg'
    },
    {
      heading: 'freeDelivery',
      icon: './assets/img/illustrations/delivery.svg'
    },
    {
      heading: 'buy/sell',
      icon: './assets/img/illustrations/otkup.svg'
    }
  ];
}
