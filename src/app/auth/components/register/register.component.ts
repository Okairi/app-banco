import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthserviceService } from '../../service/authservice.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  myForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: AuthserviceService,
    private ruta: Router
  ) {
    this.myForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {}
  submit() {
    this.service
      .register(this.myForm.value)
      .then((val) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Creado correctamente',
          showConfirmButton: false,
          timer: 1500,
        });
        this.ruta.navigate(['auth/login']);
      })
      .catch((err) => {
        console.log(err.toString().split(' '));
        let erroMess = err.toString().split(' ')[3];

        if (erroMess === '(auth/email-already-in-use).') {
          this.errorShow('El correo ya está registrado');
          console.log(err.message);
        } else if (erroMess === '(auth/invalid-email).') {
          this.errorShow('El correo ingresado no es válido');
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
