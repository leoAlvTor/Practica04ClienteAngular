import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ConfigService]
})
export class LoginComponent implements OnInit {

  private consumer: ConfigService;

  constructor(private _http: ConfigService, private _router: Router, private cookieService: CookieService) {}

  ngOnInit(): void {}

  login(form: NgForm): void{
    this._http.verificarUsuario(form.value.cedula, form.value.password)
      .subscribe(
        data => {
          if(data == '1'){
            this.cookieService.set('cedula',form.value.cedula);
            this.redirectBodega();
          }
        },
        error => {
          this.mostrarMensajeError();
        }
      );

  }

  private redirectBodega(){
    this._router.navigate(['/home']);
  }

  private mostrarMensajeError(){
    document.getElementById('msg_error').style.display = 'block';
    setTimeout(function() {
      document.getElementById('msg_error').style.display='none';
    }, 6000);
  }

}
