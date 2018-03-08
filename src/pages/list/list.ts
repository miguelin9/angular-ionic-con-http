import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { TiendaService } from '../../providers/tienda-service/tienda-service';
import { Articulo } from '../../modelos/articulo';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  
  articulos: Observable<Articulo[]>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public tiendaService: TiendaService
  ) {}  

  ngOnInit() {
    this.tiendaService.getArticulos().subscribe(
      (data) => {
        this.articulos = data;
      },
      (error) => {
        console.error(error);
      }
    )
  }

  subirArticulo() {
    let articulo = {'codigo':4040,'foto':'prueba','nombre':'miguel','categoria':'probando','precio':58,'stock':1,'descripcion':'descripcion de prueba'};
    this.tiendaService.addArticulo(articulo).subscribe(
      articulo => console.log('subido correctamente'),
      error => console.log(error)
    );
  }

  borrarArticulo(articulo:Articulo) {
    this.tiendaService.deleteArticulo(articulo).subscribe(
      borrado => console.log('borrado correctamente'),
      error => console.log(error)
    );
  }

  actualizarArticulo(articulo:Articulo) {
    let newArticulo = {'codigo':4040,'foto':'prueba','nombre':'miguel','categoria':'probando','precio':58,'stock':1,'descripcion':'descripcion de prueba'};
    this.tiendaService.updateArticulo('articulo.codigo', newArticulo).subscribe(
      actualizado => console.log('actualizado correctamente'),
      error => console.log(error)
    );
  }

}
//     codigo:number;
//     foto:string;
//     nombre:string;
//     categoria:string;
//     precio:number;
//     stock:number;
//     descripcion:string;