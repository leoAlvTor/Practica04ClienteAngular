import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config/config.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bodega',
  templateUrl: './bodega.component.html',
  styleUrls: ['./bodega.component.css'],
  providers: [ConfigService]
})
export class BodegaComponent implements OnInit {

  private bodegas: object[] = [];


  constructor(private _http: ConfigService, private _router: Router) { }

  ngOnInit(): void {
    document.getElementById('navbar').style.display = 'block';
    document.getElementById('listar_bodegas').style.display = 'block';

    document.getElementById('btn_bodegas').addEventListener('click', (ev => this.getBodegas()));
  }

  getBodegas(){
    console.log('Listar Bodegas!');
    console.log(this._http.getBodegas().subscribe(
      data =>{
        if (typeof data === 'string') {
          let leo = JSON.parse(data);
          let longitud = leo.length;
          for (let i = 0; i < longitud; i++) {
            this.bodegas.push(leo[i]);
          }
        }
      },
      error => {
        console.log('ERROR!');
      }))

  }

}
