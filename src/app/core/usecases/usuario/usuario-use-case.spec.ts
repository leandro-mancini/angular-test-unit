import { UsuarioUseCase } from './usuario-use-case';
import { TestBed } from '@angular/core/testing';
import { UsuarioRequest } from 'src/app/data/request/usuario-request';
import { UsuarioRepository } from 'src/app/data/repository/usuario/usuario-repository';
import { UsuarioModel } from '../../domain/entity/usuario-model';
import { of, Observable } from 'rxjs';

class MockUsuarioRepository {
  login(param: UsuarioRequest): Observable<UsuarioModel> {
    return of(new UsuarioModel());
  }

  logout(): Observable<boolean> {
    return of(true);
  }
}

describe('UsuarioUseCase', () => {
  let usuarioUseCase: UsuarioUseCase;
  let usuarioRepository: MockUsuarioRepository;
  let spy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: UsuarioRepository, useClass: MockUsuarioRepository }
      ]
    })
    .compileComponents();

    usuarioUseCase = TestBed.get(UsuarioUseCase);

    usuarioRepository = new MockUsuarioRepository();
  });

  it('deve ser criado', () => {
    expect(usuarioUseCase).toBeTruthy();
  });

  it('deve retornar true o metodo login', () => {
    const usuario = new UsuarioRequest();

    usuario.username = 'test';
    usuario.password = '123456';

    spy = spyOn(usuarioRepository, 'login').and.returnValue(of(new UsuarioModel()));
    expect(usuarioRepository.login(usuario)).toBeTruthy();
  });

  it('deve retornar true o metodo logout', () => {
    spy = spyOn(usuarioRepository, 'logout').and.returnValue(of(true));
    expect(usuarioRepository.logout()).toBeTruthy();
  });
});
