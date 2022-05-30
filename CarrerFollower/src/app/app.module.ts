import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DisplayAreaComponent } from './components/display-area/display-area.component';
import { DetailAreaComponent } from './components/detail-area/detail-area.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DisplayAreaComponent,
    DetailAreaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
