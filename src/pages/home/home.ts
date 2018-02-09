import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ParkServiceProvider } from '../../providers/park-service/park-service';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public service: ParkServiceProvider) {
  }

  irParaDetail(item){
    this.navCtrl.push(DetailPage, {park: item});
  }

  mostrar = false;

  procEstacionamento(){ 
    this.service.getParks ()

    if(this.mostrar){
      this.mostrar = false
    }else{
      this.mostrar = true
    }
  }

}
