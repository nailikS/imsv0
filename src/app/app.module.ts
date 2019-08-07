import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AbfragenService } from './abfragen.service';
import { AbfragenComponent } from './abfragen/abfragen.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, ],
  declarations: [ AppComponent, AbfragenComponent,],
  bootstrap:    [ AppComponent ],
  providers: [AbfragenService]
})
export class AppModule { }
