import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfigService} from '../config/config.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  private bodegaId = '';
  private categoriaId = '';
  public productos: string[] = [];
  public cedulaId = '';
  public cantidad ='';

  constructor(private activatedRoute: ActivatedRoute, private _http: ConfigService, private _route: Router,private cookieService: CookieService) {
    console.log('cedula cliente = '+ cookieService.get('cedula'));
    console.log( cookieService.getAll());
    this.activatedRoute.queryParams.subscribe(
      params =>{
        this.bodegaId = params['bodega_id'];
        this.categoriaId = params['categoria_id'];
        this.cedulaId = this.cookieService.get('cedula');

      }
    );
  }

  onKey(event) {this.cantidad = event.target.value;}

  ngOnInit(): void {
    document.getElementById('navbar').style.display = 'block';
    document.getElementById('listar_categorias').style.display = 'block';

    document.getElementById('btn_categorias').innerHTML = 'Listar Productos';

    document.getElementById('btn_bodegas').addEventListener('click', (ev => this._route.navigate(['/bodega'])))
    document.getElementById('btn_categorias').addEventListener('click', (ev => this.getProductos()));
  }

  getProductos(){
    console.log('Listar productos');
    console.log(this._http.getProductos(this.bodegaId,this.categoriaId).
    subscribe(
      data=>{
        if(typeof data === 'string'){
          let response = JSON.parse(data);
          let longitud = response.length;
          for(let i= 0; i<longitud;i++){
            console.log(response[i]);
            this.productos.push(response[i]);
        }
      }
      },
    error =>{
      console.log("OWW SHIT");
    }
    )
  );
}

}
