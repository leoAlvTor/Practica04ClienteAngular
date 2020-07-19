import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  private producto_Id='';
  private cedula_Id='';
  private cantidad='';
  constructor(private activatedRoute:ActivatedRoute, private _http:ConfigService,private _router:Router) { 
    this.activatedRoute.queryParams.subscribe(params =>{
      this.producto_Id=params['producto_Id'];
      this.cedula_Id=params['cedula_Id'];
      this.cantidad= params['cantidad'];
      console.log('se recibio '+this.producto_Id);
      console.log('contructor '+ this.cedula_Id);
      this._http.crearPedido(this.producto_Id,this.cedula_Id,this.cantidad)
      .subscribe(
        data =>{
          console.log(data);
          if(data =='1'){
            alert('4000');
          }else if (data == '2')
            alert('600');
        },
        error =>{
          alert('error 6000');
        }
      )
    });

  }
  /**
   *  crearpedido(){
    console.log('entro a crear un Pedido');
    this._http.crearPedido(this.producto_Id,this.cedula_Id);
  }
   */
 
  confirmPedido(){
    console.log('entro a CONFIRMAR pedido');
    this._http.confirmPedido(this.cedula_Id).subscribe(
      data =>{
        console.log(data);
        if(data =='1'){
          alert('4000');
        }else if (data == '2')
          alert('600');
      },
      error =>{
        alert('error 6000');
      }
    )
  }

  ngOnInit(): void {
  }

}
