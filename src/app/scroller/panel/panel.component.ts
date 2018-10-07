import { Component, OnInit } from '@angular/core';
import { Card } from './card/card.component';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  cards: Card[];

  constructor() { }

  ngOnInit() {
  }

}
