import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareDataRoutingModule } from './share-data.routing';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ShareDataRoutingModule
  ]
})
export class ShareDataModule { }
