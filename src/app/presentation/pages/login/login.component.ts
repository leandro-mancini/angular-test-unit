import { Component, OnInit } from '@angular/core';
import { UsuarioControllerService } from '../../controllers/usuario/usuario-controller.service';
import { AuthService } from 'src/app/infra/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }

  login() {
    return !this.auth.isAuthenticated();
  }

}
