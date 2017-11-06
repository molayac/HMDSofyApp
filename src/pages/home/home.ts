import { LedProvider } from './../../providers/led/led';
import { Led } from './../../model/led.interface';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  leds: Led[] = [];
  ledoff = 'ledoff.jpeg';
  constructor(public navCtrl: NavController, private _ledSrv: LedProvider) {

    this.leds.push({ title: 'LED UNO', gpio: 11, value: 0, type: 1, color: 'danger', icon: 'ledred.jpeg' });
    this.leds.push({ title: 'LED DOS', gpio: 7, value: 0, type: 1, color: 'secondary', icon: 'ledgreen.jpeg' });
    this.leds.push({ title: 'LED TRES', gpio: 12, value: 0, type: 1, color: 'primary', icon: 'ledblue.jpeg' });

    for( let i = 0; i< 3; i++) {
      this._ledSrv.statusLed(this.leds[i].gpio, this.leds[i].type).subscribe(data => {
        console.log('probando', data);
        let json = data.json();
        this.leds[i].value = json.value;        
      });
    }
  }

  onClick(i) {
    console.log('Clicked');
    let value = this.leds[i].value
    this.leds[i].value = value == 1 ? 0 : 1;
    this._ledSrv.onOffLed(this.leds[i].title, this.leds[i].gpio, this.leds[i].value, 1).subscribe(data => {
      console.log('OK CONSUMO', data);
    }, err => {
      console.error('No se pudo consumir: ', err);
    });
  }

}
