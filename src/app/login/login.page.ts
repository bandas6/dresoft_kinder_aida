import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formBuider = inject(FormBuilder)

  formLogin!:FormGroup;

  ingresando:boolean = false;
  

  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
 
  }

  construirFormulario() {
    this.formLogin = this.formBuider.group({
      correo: [''],
      contrasenia: [''],
    });
  }

  ingresar(){
    console.log(this.formLogin.value);
  }

  recuperarContrasenia(){
    
  }
  

}
