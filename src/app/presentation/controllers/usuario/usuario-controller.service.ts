import { Injectable } from '@angular/core';
import { IUsuarioController } from 'src/app/core/interfaces/controllers/iusuario-controller';
import { of, Observable } from 'rxjs';
import { UsuarioModel } from 'src/app/core/domain/entity/usuario-model';
import { UsuarioRequest } from '../../../data/request/usuario-request';

@Injectable({
  providedIn: 'root'
})
export class UsuarioControllerService implements IUsuarioController {

  constructor() { }

  login(param: UsuarioRequest): Observable<UsuarioModel> {
    return of(new UsuarioModel());
  }
  logout(): Observable<boolean> {
    return of(true);
  }
}
