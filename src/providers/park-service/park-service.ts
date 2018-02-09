import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the ParkServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ParkServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ParkServiceProvider Provider');
  }

  apiUrl = "http://localhost:3000";

  parks = [];


  addPark (newPark) {  

    if(newPark.nome !== '' && newPark.endereco !== '' && newPark.preco !== '') {
      this.http.post((this.apiUrl + '/estacionamentos'), newPark).subscribe(data => {
        console.log('park added');
    
      
      // this.getParks();
      }) 
    }
  }

  getParks () {
    this.http.get<any>(this.apiUrl + '/estacionamentos').subscribe((resposta) => {
      this.parks = resposta;
      console.log(resposta);
        })
  }


}
