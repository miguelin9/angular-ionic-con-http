import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Articulo } from '../../modelos/articulo';

@Injectable()
export class TiendaService {

  url:string = 'http://52.47.123.57:5000/articulos/';
  // private articulos:Observable<Articulo[]>;

  constructor(public http: HttpClient) {}

  // cargarArticulos() {
  //   this.articulos = this.http.get<Articulo[]>('http://52.47.123.57:5000/articulos/');
  // }

  getArticulos():Observable<any> {
    // return this.http.get('https://randomuser.me/api/?results=25');
    return this.http.get(this.url);
  }

  addArticulo(articulo: Articulo): Observable<Articulo>{
    let json = JSON.stringify(articulo);
    console.log('json:' + json);
    // let params = "json="+json;
    let headers = new HttpHeaders({'Content-Type':'application/json'});
     
    return this.http.post<Articulo>(this.url, json, {headers: headers});
  }

  deleteArticulo(articulo:Articulo): Observable<{}> {
    return this.http.delete(this.url+articulo.codigo);
  }

  updateArticulo(codigo:string, articulo:Articulo): Observable<Articulo> {
    let json = JSON.stringify(articulo);
    console.log('json:' + json);
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.http.put<Articulo>(this.url+articulo.codigo, json, {headers:headers});
  }

}
