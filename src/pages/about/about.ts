import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';

@Component({

  selector: 'page-about',
  templateUrl: 'about.html'

})

export class AboutPage {

  constructor(public loadingCtrl: LoadingController) { }

  presentLoading() {

    let loader = this.loadingCtrl.create({
      content: "Enviando el mensaje...",
      duration: 2000

    });

    loader.present();

  }

}
