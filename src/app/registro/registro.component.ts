import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ConfigService} from '../config/config.service';
import {Router} from '@angular/router';
import {timeout} from 'rxjs/operators';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [ConfigService]
})
export class RegistroComponent implements OnInit {

  private consumer: ConfigService

  constructor(private _http: ConfigService, private _router: Router) { }

  ngOnInit(): void {
  }

  register(form: NgForm): void {
    let cedula = form.value.cedula;
    let correo = form.value.correo;
    let password = form.value.password;

    this._http.registrarCliente(cedula, correo, password)
      .subscribe(
        data => {
          console.log(data);
          if(data == '1'){
            this.mostrarAlerta('msg_exito', 4000);
          }else if (data == '2')
            this.mostrarAlerta('msg_error', 6000);
        },
        error => {
          this.mostrarAlerta('msg_error', 6000);
        }
      )

  }

  private mostrarAlerta(elemento: string, timeout: number){
    document.getElementById(elemento).style.display='block';

    setTimeout(function() {
      document.getElementById(elemento).style.display='none';
    }, timeout);
  }

}
