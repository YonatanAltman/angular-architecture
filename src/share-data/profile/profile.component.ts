import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public get name() {
    return this.app.name;
  }
  title = {
    name: 'what is your name?'
  }
  constructor(private app: AppService) { }

  ngOnInit() {
    console.log('ngOnInit Profile');


  }

}
