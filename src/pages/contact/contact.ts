import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ParkServiceProvider } from '../../providers/park-service/park-service';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public http: HttpClient, public service: ParkServiceProvider) {

  }
  park = {
    nome:'',
    endereco:  '',
    preco: 0,
    foto: '',
    comentarios: []
  }


  add () {  
    
    this.service.addPark(this.park);

    this.park = {
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
