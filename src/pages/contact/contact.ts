import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ParkServiceProvider } from '../../providers/park-service/park-service';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public service: ParkServiceProvider) {

  }
  park = {
    ne: 0,
    nome:'',
    endereco:  '',
    preco: 0,
    foto: '',
    comentarios: []
  }


  add () {  
    this.service.getParks();
    this.park.ne = (this.service.parks.length + 1);
    this.service.addPark(this.park);

    this.park = {
      ne: 0,
      nome:'',
      endereco:  '',
      preco: 0,
      foto: '',
      comentarios: []
    }
    
  }

  get() {
    this.service.getParks();
  }

  
}
