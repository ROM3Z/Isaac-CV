import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { House } from '../model/houseReport';

@Injectable({
  providedIn: 'root'
})
export class CvabastidasService {
  url = 'http://hp-api.herokuapp.com/api/characters/house/'
  personajes: any[] = [];
  estudiantes: any[] = [];
  profesores: any[] = [];

  constructor(private http: HttpClient) {
    this.CargarPersonajes();
    this.CargarEstudiantes();
    this.CargarProfesores();
  }

  
  public CargarPersonajes(){
    return this.http.get('http://hp-api.herokuapp.com/api/characters/house/Gryffindor')
  }


  public CargarEstudiantes(){
    return this.http.get('http://hp-api.herokuapp.com/api/characters/students')
     
  }

  public CargarProfesores(){
    return this.http.get('http://hp-api.herokuapp.com/api/characters/staff') 
  }

  getEstudiantes(house:string){
    let header = new HttpHeaders().set('Type-content','aplication/json')

return this.http.get<House>(`${this.url}${house}`, {headers: header} );
}

}
