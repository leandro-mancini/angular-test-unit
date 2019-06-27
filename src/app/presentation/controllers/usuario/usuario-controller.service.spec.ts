import { TestBed } from '@angular/core/testing';

import { UsuarioControllerService } from './usuario-controller.service';
import { UsuarioRequest } from '../../../data/request/usuario-request';
import { IUsuarioUseCase } from 'src/app/core/interfaces/usecases/iusuario-use-case';
import { of, Observable } from 'rxjs';
import { UsuarioModel } from 'src/app/core/domain/entity/usuario-model';

class MockIUsuarioUseCase extends IUsuarioUseCase {
  login(param: UsuarioRequest): Observable<UsuarioModel> {
    return of(new UsuarioModel());
  }

  logout(): Observable<boolean> {
    return of(true);
  }
}

describe('UsuarioControllerService', () => {
  let usuarioController: UsuarioControllerService;
  let usuarioUseCase: MockIUsuarioUseCase;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provider: IUsuarioUseCase, useClass: MockIUsuarioUseCase }
      ]
    });

    usuarioUseCase = new MockIUsuarioUseCase();
    usuarioController = new UsuarioControllerService(usuarioUseCase);
  });

  it('deve ser criado', () => {
    expect(usuarioController).toBeTruthy();
  });

  it('deve retornar true o metodo login', () => {
    const usuario = new UsuarioRequest();

    spyOn(usuarioUseCase, 'logout').and.returnValue(of(true));

    usuario.username = 'test';
    usuario.password = '123456';

    expect(usuarioController.login(usuario)).toBeTruthy();
  });

  it('deve retornar true o metodo logout', () => {
    expect(usuarioController.logout()).toBeTruthy();
  });
});
