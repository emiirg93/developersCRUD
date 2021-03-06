import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  url:string = "http://localhost:8080/api"

  constructor(private httpClient: HttpClient) { }

  public traerTodos(){
    return this.httpClient.get(`${this.url}/developers`);
  }

  public traerUno(id:number){
    return this.httpClient.get<developer>(`${this.url}/developer/${id}`);
  }

  public editar(developer:developer){
    return this.httpClient.put<developer>(`${this.url}/edit`,developer);
  }

  public eliminar(id:number){
    return this.httpClient.delete<developer>(`${this.url}/delete/${id}`);
  }

  public agregar(developer:developer){
    return this.httpClient.post<developer>(`${this.url}/add`,developer);
  }
}

export interface developer{
  nombre:String,
  apellido:String,
  edad:number,
  especialidad:String,
  descripcion:String
}
