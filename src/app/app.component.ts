import {Component, HostListener} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, share} from 'rxjs/operators';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

  title = 'iPhone Servis Zadar pocetna';
  innerWidth: any;

  constructor(private breakpointObserver: BreakpointObserver, public translate: TranslateService) {
    this.innerWidth = window.innerWidth;

    translate.addLangs(['en', 'hr']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|hr/) ? browserLang : 'en');
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Tablet, Breakpoints.Handset])
    .pipe(
      map(result => result.matches),
      share()
    );

  @HostListener('window:resize')
  public onResize(): void {
    this.innerWidth = window.innerWidth;
    console.log(this.innerWidth);
  }

  toggleDropDownLanguages() {
    this.langDroped = !this.langDroped;
  }

  setLanguage(l) {
    this.translate.use(l.value);
    this.currentLang = l;
    this.langDroped = !this.langDroped;
    this.toggleDropDownLanguages();
  }
}
