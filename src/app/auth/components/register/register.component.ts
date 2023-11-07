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
        Swal.fire({
          title: 'Error!',
          text: 'Error al crear el usuario, intento más tarde',
          icon: 'error',
          confirmButtonText: 'Cerrar',
        });
      });
  }
}
