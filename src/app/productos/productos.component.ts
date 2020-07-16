import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfigService} from '../config/config.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  private bodegaId = '';
  private categoriaId = '';

  constructor(private activatedRoute: ActivatedRoute, private _http: ConfigService, private _route: Router) {
    this.activatedRoute.queryParams.subscribe(
      params =>{
        this.bodegaId = params[''];
        this.categoriaId = params[''];
      }
    );
  }

  ngOnInit(): void {
  }

  getProductos(){

  }

}
