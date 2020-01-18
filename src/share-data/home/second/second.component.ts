import {
  Component, OnInit, Input,
  Output, EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  @Input() message: string;
  @Output() outputMessage = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  onClick() {
    this.outputMessage.emit('message from son');
  }
}
