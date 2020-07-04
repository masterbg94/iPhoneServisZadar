import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {WebsiteTermsComponent} from '../website-terms/website-terms.component';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(
    private dialog: MatDialog
  ) {
  }

  openTermsDialog() {
    this.dialog.open(WebsiteTermsComponent, {
      maxWidth: '60vw',
      maxHeight: '80vh'
    });
  }
}
