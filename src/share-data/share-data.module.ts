import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ShareDataRoutingModule } from './share-data.routing';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';

 


@NgModule({
  declarations: [HomeComponent, AboutComponent, ProfileComponent],
  imports: [
    CommonModule,
    ShareDataRoutingModule,
    FormsModule

  ]
})
export class ShareDataModule { }
