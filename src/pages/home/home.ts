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
  ledsAll: Led[] = [];
  ledoff = 'ledoff.jpeg';
  constructor(public navCtrl: NavController, private _ledSrv: LedProvider) {
    this.initData();

  }

  ionViewWillEnter() {
    this.initData();
  }

  initData() {
    this.leds = [
      { title: 'LED UNO', gpio: 11, value: 0, type: 1, color: 'danger', icon: 'ledred.jpeg' },
      { title: 'LED DOS', gpio: 7, value: 0, type: 1, color: 'secondary', icon: 'ledgreen.jpeg' },
      { title: 'LED TRES', gpio: 12, value: 0, type: 1, color: 'primary', icon: 'ledblue.jpeg' }
    ];

    for (let i = 0; i < 3; i++) {
      this._ledSrv.statusLed(this.leds[i].gpio, this.leds[i].type).subscribe(data => {
        console.log('probando', data);
        let json = data.json();
        this.leds[i].value = json.value;
      });

    }
    this.ledsAll = this.leds;
  }

  getItems(ev: any) {
    this.leds = this.ledsAll;
    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.leds = this.leds.filter((item) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1 || (item.gpio - val) == 0);
      })
    }
  }

  onClick(i) {
    console.log('Clicked');
    let value = this.leds[i].value
    this.leds[i].value = value == 1 ? 0 : 1;
    this.ledsAll[i].value = this.leds[i].value;
    this._ledSrv.onOffLed(this.leds[i].title, this.leds[i].gpio, this.leds[i].value, 1).subscribe(data => {
      console.log('OK CONSUMO', data);
    }, err => {
      console.error('No se pudo consumir: ', err);
    });
  }

}
