import {Component, HostListener, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import {map, share} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private breakpointObserver: BreakpointObserver) {
    this.innerWidth = window.innerWidth;
  }

  title = 'iPhone Servis Zadar pocetna';
  innerWidth: any;

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
}
