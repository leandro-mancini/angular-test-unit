import { TestBed } from '@angular/core/testing';

import { UsuarioControllerService } from './usuario-controller.service';
import { UsuarioRequest } from '../../../data/request/usuario-request';

describe('UsuarioControllerService', () => {
  let service: UsuarioControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({})
    .compileComponents();

    service = TestBed.get(UsuarioControllerService);
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });

  it('deve retornar true o metodo login', () => {
    const usuario = new UsuarioRequest();

    usuario.username = 'test';
    usuario.password = '123456';

    expect(service.login(usuario)).toBeTruthy();
  });

  it('deve retornar true o metodo logout', () => {
    expect(service.logout()).toBeTruthy();
  });
});
