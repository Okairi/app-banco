import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../../service/authservice.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  myFormLogin!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: AuthserviceService,
    private ruta: Router
  ) {
    this.myFormLogin = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    this.service
      .login(this.myFormLogin.value)
      .then((x: any) => {
        this.service.objUser = x;

        localStorage.setItem('token', x.user.accessToken);
        localStorage.setItem('user', x.user.email);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Iniciado correctamente',
          showConfirmButton: false,
          timer: 1500,
        });

        this.ruta.navigate(['bank/']);
      })
      .catch((err) => {
        console.log(err.toString().split(' '));
        let erroMess = err.toString().split(' ')[3];

        if (erroMess === '(auth/invalid-login-credentials).') {
          this.errorShow('El usuario no está registrado.');
          console.log(err.message);
        } else {
          this.errorShow('Error en el sistema, intentelo en unos minutos');
        }
      });
  }
  errorShow(textShow: string) {
    Swal.fire({
      title: 'Error!',
      text: textShow,
      icon: 'error',
      confirmButtonText: 'Cerrar',
    });
  }
}
