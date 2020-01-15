import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = {
    title: 'Hello Works'
  };
  name = '';
  constructor(private app: AppService) { }

  ngOnInit() {
    console.log('ngOnInit Home');

    this.name = this.app.name = 'Home';
  }

}
