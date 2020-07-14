import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfigService} from '../config/config.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  private bodegaId = '';
  private categorias: string[] = [];

  constructor(private activatedRoute: ActivatedRoute, private _http: ConfigService, private _route: Router) {
    this.activatedRoute.queryParams.subscribe(params =>{
      this.bodegaId = params['bodega_id'];
    });
  }

  ngOnInit(): void {
    document.getElementById('navbar').style.display = 'block';
    document.getElementById('listar_categorias').style.display = 'block';

    document.getElementById('btn_bodegas').addEventListener('click', (ev => this._route.navigate(['/bodega'])))
    document.getElementById('btn_categorias').addEventListener('click', (ev => this.getCategorias()));
  }

  getCategorias(){
    console.log('Listar Categorias');

    console.log(this._http.getCategorias(this.bodegaId)
      .subscribe(
        data =>{
          if(typeof data === 'string'){
            let response = JSON.parse(data);
            let longitud = response.length;
            for (let i = 0; i < longitud; i++) {
              console.log(response[i]);
              this.categorias.push(response[i]);
            }
          }
        },
        error => {
          console.log('ERROR BBY');
        }
      )
    );

  }

}
