import {Component} from '@angular/core';

@Component({
  selector: 'app-whyus-component',
  templateUrl: './whyus.component.html',
  styleUrls: ['./whyus.component.scss']
})
export class WhyusComponent {
  whyUs = [
    {
      heading: 'WHYCHOOSEUS.freeAnalyze',
      icon: './assets/img/illustrations/analyze1.svg',
      description: 'WHYCHOOSEUS.freeAnalyzeTxt'
    },
    {
      heading: 'WHYCHOOSEUS.fastService',
      icon: './assets/img/illustrations/time2.svg',
      description: 'WHYCHOOSEUS.fastServiceTxt'
    },
    {
      heading: 'WHYCHOOSEUS.freeDelivery',
      icon: './assets/img/illustrations/delivery.svg',
      description: 'WHYCHOOSEUS.freeDeliveryTxt'
    },
    {
      heading: 'WHYCHOOSEUS.buy/sell',
      icon: './assets/img/illustrations/otkup.svg',
      description: 'WHYCHOOSEUS.buy/sellTxt'
    }
  ];
}
