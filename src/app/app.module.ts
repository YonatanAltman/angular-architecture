import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ShareDataModule } from '../share-data/share-data.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ShareDataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
