import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ConfigService {

  public data;

  constructor(private http: HttpClient) {
  }

  /**ScorpionCODeStart*/
  crearPedido(productoId:string, cedulaId:string,cantidad:string){
    let url='rest/pedido/crearpedido';
    const body = new HttpParams()
    .set('producto_Id',productoId)
    .set('cedula_Id',cedulaId)
    .set('cantidad',cantidad);
    return this.http.post(
      url,
      body.toString(),
      {
        headers: new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded'),
        responseType: 'text'
      }
    );
  }

  confirmPedido(cedulaId:string){
    let url='rest/pedido/confirmpedido';
    const body = new HttpParams()
    .set('cedula_Id',cedulaId);
    return this.http.post(
      url,
      body.toString(),
      {
        headers: new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded'),
        responseType: 'text'
      }
    );
  }
  /**ScorpionCodeEnds */
  getProductos(bodegaId: string, categoriaId: string){
    let url = 'rest/producto/list';
    const body = new HttpParams()
      .set('bodegaId', bodegaId)
      .set('categoriaId', categoriaId);
    return this.http.post(
      url,
      body.toString(),
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        responseType: 'text'
      }
    );

  }


  getCategorias(bodegaId: string){
    let url = 'rest/categoria/list';
    const body = new HttpParams()
      .set('bodega_id', bodegaId);

    return this.http.post(url,
      body.toString(),
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        responseType: 'text'
      });
  }

  getBodegas(){
    let url = 'rest/bodega/list';
    return this.http.get(url, {
      responseType: 'text'
    });

  }

  registrarCliente(cedula: string, correo: string, password: string){
    let url = 'rest/usuario/register/';

    const body = new HttpParams()
      .set('cedula', cedula)
      .set('correo', correo)
      .set('password', password);

    return this.http.post(url,
      body.toString(),
      {
        headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
        responseType: 'text'
      });
  }


  verificarUsuario(usuario: string, password: string): Observable<any> {
    let url = 'rest/usuario/login/';

    const body = new HttpParams()
      .set('cedula', usuario)
      .set('password', password);

    return this.http.post('/rest/usuario/login/',
      body.toString(), {
        headers: new HttpHeaders()
          .set('Content-Type', 'application/x-www-form-urlencoded'),
        responseType: 'text'
      });
  }

}
