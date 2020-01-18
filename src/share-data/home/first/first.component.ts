import { Component, OnInit, Input } from '@angular/core';
import { IConfig } from '../home.component';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  @Input() message: string;
  @Input() config: IConfig;
  constructor() { }

  ngOnInit() {
  }

}
