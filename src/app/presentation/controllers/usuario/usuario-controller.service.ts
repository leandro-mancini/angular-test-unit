import { Injectable } from '@angular/core';
import { IUsuarioController } from 'src/app/core/interfaces/controllers/iusuario-controller';
import { of, Observable } from 'rxjs';
import { UsuarioModel } from 'src/app/core/domain/entity/usuario-model';
import { UsuarioRequest } from '../../../data/request/usuario-request';
import { UsuarioUseCase } from '../../../core/usecases/usuario/usuario-use-case';
import { IUsuarioUseCase } from 'src/app/core/interfaces/usecases/iusuario-use-case';

@Injectable({
  providedIn: 'root'
})
export class UsuarioControllerService implements IUsuarioController {

  constructor(
    private usuarioUseCase: IUsuarioUseCase
  ) { }

  login(param: UsuarioRequest): Observable<UsuarioModel> {
    return this.usuarioUseCase.login(param);
  }
  logout(): Observable<boolean> {
    return this.usuarioUseCase.logout();
  }
}
