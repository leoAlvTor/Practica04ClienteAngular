import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ConfigService {

  public data;

  constructor(private http: HttpClient) {
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
