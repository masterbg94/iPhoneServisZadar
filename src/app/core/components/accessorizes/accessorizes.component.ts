import {Component, OnInit} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';

@Component({
  selector: 'app-accessorizes-component',
  templateUrl: './accessorizes.component.html',
  styleUrls: ['./accessorizes.component.scss']
})
export class AccessorizesComponent implements OnInit{
  innerWidth: any;

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    console.log(innerWidth);
  }
}
