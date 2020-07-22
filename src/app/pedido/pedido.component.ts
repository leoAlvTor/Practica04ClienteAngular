import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BodegaComponent } from '../bodega/bodega.component';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  private producto_Id='';
  private cedula_Id='';
  private cantidad='';
  //SICHA
  private persona_id = '';
  public pedidos: string[] = [];

  constructor(private activatedRoute:ActivatedRoute, private _http:ConfigService,private _router:Router) { 
    this.activatedRoute.queryParams.subscribe(params =>{
      this.producto_Id=params['producto_Id'];
      this.cedula_Id=params['cedula_Id'];
      this.cantidad= params['cantidad'];
      //SICHA
      this.persona_id = params['persona_id'];
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

  //SIKA
  getPedidos(btn){
    console.log('Listar Pedidos');
    
    if(btn.innerHTML == 'Listar Pedidos'){
      btn.innerHTML = 'Ocultar Pedidos';
      document.getElementById('listado_pedidos').style.display = 'block';
    }else{
      document.getElementById('listado_pedidos').style.display = 'none';
      btn.innerHTML = 'Listar Pedidos';
    }
    console.log(this._http.getPedidos(this.cedula_Id)
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

  ngOnInit(): void {
    let btn_pedidos = document.getElementById('btn_pedidos');
    btn_pedidos.addEventListener('click', e=>this.getPedidos(btn_pedidos));

  }

  

}
