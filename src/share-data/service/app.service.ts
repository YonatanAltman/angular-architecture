import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public name = 'Yonatan';
  constructor() {
    console.log('App Service is up');
    
   }
}
