import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ShareDataRoutingModule } from './share-data.routing';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { FirstComponent } from './home/first/first.component';
import { SecondComponent } from './home/second/second.component';

 


@NgModule({
  declarations: [HomeComponent, AboutComponent, ProfileComponent, FirstComponent, SecondComponent],
  imports: [
    CommonModule,
    ShareDataRoutingModule,
    FormsModule

  ]
})
export class ShareDataModule { }
