import { Component, OnInit } from '@angular/core';
import { AppService } from '../service/app.service';

export interface IConfig {
  title: string;
  num: number;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = {
    title: 'Hello Works'
  };
  firstConfig: IConfig = {
    title: 'THIS TITLE FROM CONFIG',
    num: 10
  }

  arr: IConfig[] = [
    { title: 'first', num: 1 },
    { title: 'second', num: 2 },
    { title: 'therd', num: 3 }
  ];
  name = '';
  constructor(private app: AppService) { }

  ngOnInit() {
    console.log('ngOnInit Home');

    this.name = this.app.name = 'Home';

  }
  getMessage(msg: string) {
    this.name = msg;
    console.log(msg);
    

  }
  onClick(event) {
    console.log(event);

  }
}
