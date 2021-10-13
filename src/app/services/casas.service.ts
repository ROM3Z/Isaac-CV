import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { House } from 'src/app/model/houseReport';


@Injectable({
  providedIn: 'root'
})
export class CasasService {
  getEstudiantes(house:string){
    let header = new HttpHeaders().set('Type-content','aplication/json')

return this.http.get<House>(`${this.url}${house}`, {headers: header} );
}
  url = 'http://hp-api.herokuapp.com/api/characters/house/'
  constructor(
      private http:HttpClient
  ){
      console.log('Servicio Estiante')
  }
  
  }