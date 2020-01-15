import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'שלום לכל המתנדבים';
  navs = [
    { label: 'home', rout: 'share-data/home' },
    { label: 'about', rout: 'share-data/about' },
    { label: 'profile', rout: 'share-data/profile' },
  ];
}
