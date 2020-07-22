import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ConfigService} from '../config/config.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  private persona_id = '';
  public pedidos: string[] = [];

  


  constructor(private activatedRoute: ActivatedRoute, private _http: ConfigService, private _route: Router) { 
    this.activatedRoute.queryParams.subscribe(params =>{
      this.persona_id = params['persona_id'];
    });
  }

  ngOnInit(): void {
  }

  getPedidos(){
    console.log('Listar Pedidos');
    console.log(this._http.getPedidos(this.persona_id)
      .subscribe(
        data =>{
          if(typeof data === 'string'){
            let response = JSON.parse(data);
            let longitud = response.length;
            for (let i = 0; i < longitud; i++) {
              console.log(response[i]);
              this.pedidos.push(response[i]);
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
