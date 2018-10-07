import { Component, OnInit } from '@angular/core';
import { PanelComponent } from './panel/panel.component';

@Component({
  selector: 'app-scroller',
  templateUrl: './scroller.component.html',
  styleUrls: ['./scroller.component.css']
})
export class ScrollerComponent implements OnInit {

  panels: PanelComponent[];

  constructor() { }

  ngOnInit() {
  }

}
