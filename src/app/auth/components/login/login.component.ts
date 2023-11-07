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
      .catch(() => {
        Swal.fire({
          title: 'Error!',
          text: 'Error al iniciar sesion, intento más tarde',
          icon: 'error',
          confirmButtonText: 'Cerrar',
        });
      });
  }
}
