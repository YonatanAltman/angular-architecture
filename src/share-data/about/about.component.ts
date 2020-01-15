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
  constructor(public app: AppService) { }

  ngOnInit() {
    console.log('ngOnInit About');

  }

}
