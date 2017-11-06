import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  slides = [
    {
      title: "SOFIA LEDS!",
      description: "Esta aplicacion <b>SOFIA LEDS</b> permite manipular tres leds remotamente.",
      image: "./assets/imgs/images.png",
    },
    {
      title: "Que hacemos?",
      description: "<b>ENCENDER LEDS</b> Actualmente solo estamos encendiendo leds, pero muy pronto permitirá manipular desde el celular las luces y alarmas del hogar.",
      image: "./assets/imgs/leds.png",
    },
    {
      title: "Diviértete",
      description: "Ir al HOME",
      image: "",
    }
  ];

  constructor(public navCtrl: NavController) {

  }

}
