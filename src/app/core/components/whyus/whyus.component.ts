import {Component} from '@angular/core';

@Component({
  selector: 'app-whyus-component',
  templateUrl: './whyus.component.html',
  styleUrls: ['./whyus.component.scss']
})
export class WhyusComponent {
  // whyUs = [
  //   {
  //     heading: 'Besplatna analiza',
  //     icon: './assets/img/icons/analysis.png'
  //   },
  //   {
  //     heading: 'Brzi servis',
  //     icon: './assets/img/icons/countdown.png'
  //   },
  //   {
  //     heading: 'Besplatna dostava / preuzimanje',
  //     icon: './assets/img/icons/free-shipping.png'
  //   },
  //   {
  //     heading: 'Otkup / Prodaja',
  //     icon: './assets/img/icons/exchange1.png'
  //   }
  // ];
  whyUs = [
    {
      heading: 'Besplatna analiza',
      icon: './assets/img/illustrations/analyze1.svg'
    },
    {
      heading: 'Brzi servis',
      icon: './assets/img/illustrations/time2.svg'
    },
    {
      heading: 'Besplatna dostava / preuzimanje',
      icon: './assets/img/illustrations/delivery.svg'
    },
    {
      heading: 'Otkup / Prodaja',
      icon: './assets/img/illustrations/otkup.svg'
    }
  ];
}
