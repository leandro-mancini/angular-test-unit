import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import { IUsuarioUseCase } from '../../interfaces/usecases/iusuario-use-case';
import { UsuarioRequest } from '../../../data/request/usuario-request';
import { UsuarioModel } from '../../domain/entity/usuario-model';
import { UsuarioRepository } from '../../../data/repository/usuario/usuario-repository';

@Injectable({
  providedIn: 'root'
})
export class UsuarioUseCase implements IUsuarioUseCase<UsuarioRequest, UsuarioModel> {

  constructor(
    private usuarioRepository: UsuarioRepository
  ) { }

  login(param: UsuarioRequest): Observable<UsuarioModel> {
    return this.usuarioRepository.login(param);
  }

  logout(): Observable<boolean> {
    return this.usuarioRepository.logout();
  }


}
