import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  title = {
    name: 'my name is'
  }
  isSomthing: boolean;
  constructor(public app: AppService) { }
  items = ['aaaaaa', 'sssss', 'dddddd', 'gggggg', 'hhhhhh', 'a', 'a', 'a']
  ngOnInit() {
    console.log('ngOnInit About');

  }

}
