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

  apiUrl = "http://159.203.45.167:3000";

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
      console.log(this.parks.length);
        })
  }

  updatePark (park) {

    this.http.post((this.apiUrl + '/update'), park).subscribe((resposta) => {
      console.log('park updated');
    });
  }



  // getGeolocation (park) {
    
  //   console.log(park);
    
    
  //   this.http.get<any>(`https://maps.googleapis.com/maps/api/geocode/json?address=${park.endereco.numero}+${park.endereco.rua},+${park.endereco.cidade},+${park.endereco.estado}&key=AIzaSyCfhWkrDHxzTkxymVOBS-CGGbT5Md1nzeU`).subscribe((resposta) => {
      
  //     console.log(resposta.results[0].geometry.location.lat);
  //     console.log(resposta.results[0].geometry.location.lng);
  //       })
  // }
  

}
