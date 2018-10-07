import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ScrollerComponent } from './scroller/scroller.component';
import { PanelComponent } from './scroller/panel/panel.component';
import { Card } from './scroller/panel/card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    ScrollerComponent,
    PanelComponent,
    Card
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
