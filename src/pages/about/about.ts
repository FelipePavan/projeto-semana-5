import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ParkServiceProvider } from '../../providers/park-service/park-service';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public service: ParkServiceProvider) {

  }


  park = {
    ne: '',
    nome:'',
    endereco:  '',
    preco: '',
    foto: '',
    comentarios: []
  }



  update () {

    this.service.updatePark(this.park);
  }
}
