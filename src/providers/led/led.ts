import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the LedProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LedProvider {
  //apiUrl = '192.168.1.74:3000/api';
  apiUrl = '/api';
  constructor(public http: Http) {
    console.log('Hello LedProvider Provider');
  }

  public onOffLed(title: string, gpio: number, value: number, type?: number) {
    let json = { title: title, gpio: gpio, value: value, type: 1 };
    return this.http.post(this.apiUrl + '/leds', json);
  }

  public statusLed(gpio: number, type?: number) {
    if (!type) { type = 1; }
    return this.http.get(this.apiUrl + '/leds/' + gpio + '&' + type);
  }

}
