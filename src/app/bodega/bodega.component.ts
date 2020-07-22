import { Component, OnInit } from '@angular/core';
import {ConfigService} from '../config/config.service';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-bodega',
  templateUrl: './bodega.component.html',
  styleUrls: ['./bodega.component.css'],
  providers: [ConfigService]
})
export class BodegaComponent implements OnInit {

  public bodegas: object[] = [];


  constructor(private _http: ConfigService, private _router: Router, private cookieService: CookieService) { }

  ngOnInit(): void {
    document.getElementById('navbar').style.display = 'block';
    document.getElementById('listar_bodegas').style.display = 'block';

    document.getElementById('btn_bodegas').addEventListener('click', (ev => this.getBodegas()));
    alert(this.cookieService.get('cedula'));
  }

  getBodegas(){
    console.log('Listar Bodegas!');
    console.log(this._http.getBodegas().subscribe(
      data =>{
        if (typeof data === 'string') {
          let response = JSON.parse(data);
          let longitud = response.length;
          for (let i = 0; i < longitud; i++) {
            this.bodegas.push(response[i]);
            console.log(response[i]);
          }
        }
      },
      error => {
        console.log('ERROR!');
      }))

  }

}
