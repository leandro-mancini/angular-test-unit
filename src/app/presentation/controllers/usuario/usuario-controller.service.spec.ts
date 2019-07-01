import { TestBed } from '@angular/core/testing';

import { UsuarioControllerService } from './usuario-controller.service';
import { UsuarioRequest } from '../../../data/request/usuario-request';
import { IUsuarioUseCase } from 'src/app/core/interfaces/usecases/iusuario-use-case';

describe('UsuarioControllerService', () => {
  let usuarioController: UsuarioControllerService;
  let valueServiceSpy: jasmine.SpyObj<IUsuarioUseCase>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('IUsuarioUseCase', ['login', 'logout']);

    TestBed.configureTestingModule({
      providers: [
        { provide: IUsuarioUseCase, useValue: spy }
      ]
    });

    valueServiceSpy = TestBed.get(IUsuarioUseCase);
    usuarioController = TestBed.get(UsuarioControllerService);
  });

  it('deve ser criado', () => {
    expect(usuarioController).toBeTruthy();
  });

  it('deve retornar true o metodo login', () => {
    const usuario = new UsuarioRequest();

    usuario.username = 'test';
    usuario.password = '123456';

    usuarioController.login(usuario);

    expect(valueServiceSpy.login.calls.count()).toBe(1);
  });

  it('deve retornar true o metodo logout', () => {
    usuarioController.logout();

    expect(valueServiceSpy.logout.calls.count()).toBe(1);
  });
});
