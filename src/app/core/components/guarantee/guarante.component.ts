import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-guarantee-component',
  templateUrl: './guarante.component.html',
  styleUrls: ['./guarante.component.scss']
})
export class GuaranteComponent implements OnInit {
  innerWidth: any;

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    console.log(innerWidth);
  }
}
