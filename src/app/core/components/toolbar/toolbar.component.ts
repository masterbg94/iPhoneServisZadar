import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-toolbar-component',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  langDroped: boolean;
  languages: any[] = [
    {
      value: 'hr',
      name: 'Hrvatski',
      nameShort: 'Hr',
      img: '/assets/img/lang-hr.png'
    },
    {
      value: 'en',
      name: 'English',
      nameShort: 'En',
      img: 'assets/img/lang-en.png'
    }
  ];
  currentLang = this.languages[1];

  constructor(private translate: TranslateService) {
  }

  toggleLanguage() {
    this.langDroped = !this.langDroped;
  }

  setLang(l) {
    this.translate.use(l.value);
    this.currentLang = l;
    this.langDroped = !this.langDroped;
  }
}
