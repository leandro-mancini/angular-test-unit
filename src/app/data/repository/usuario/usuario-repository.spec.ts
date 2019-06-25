import { UsuarioRepository } from './usuario-repository';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../../environments/environment';
import { UsuarioModel } from '../../../core/domain/entity/usuario-model';

describe('data: UsuarioRepository', () => {
  let usuarioRepository: UsuarioRepository;
  let httpTestingController: HttpTestingController;
  let spy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [UsuarioRepository]
    }).compileComponents();

    usuarioRepository = TestBed.get(UsuarioRepository);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
  });

  it('deve criar uma instancia', () => {
    expect(usuarioRepository).toBeTruthy();
  });

  it('deve executar o metodo login', () => {
    const mockResponse = [{
      id: 1,
      nome: 'test'
    }];

    expect(usuarioRepository.login({ username: 'usuario1', password: '123' })).toBeTruthy();
  });

  it('deve validar se o metodo login é do tipo GET e retornar um UsuarioModel', () => {
    const mockResponse = [{
      id: 1,
      nome: 'usuario1'
    }];

    const param = {
      username: 'usuario1',
      password: '123'
    };

    usuarioRepository.login(param).subscribe((res: UsuarioModel) => {
      if (res) {
        expect(res).toBeTruthy();
        expect(res.id).toEqual(1);
        expect(res.nome).toEqual(param.username);
      }
    });

    const req = httpTestingController.expectOne(
      environment.serverUrl + '/usuarios?username=' + param.username + '&senha=' + param.password + ''
    );

    expect(req.request.method).toEqual('GET');

    req.flush(mockResponse);
  });

  it('deve retornar null ao executar o metodo login', () => {
    const mockResponse = [null];

    const param = {
      username: 'usuario1',
      password: '123'
    };

    usuarioRepository.login(param).subscribe(res => {
      expect(res).toEqual(null);
    });

    const req = httpTestingController.expectOne(
      environment.serverUrl + '/usuarios?username=' + param.username + '&senha=' + param.password + ''
    );

    req.flush(mockResponse);
  });

  it('deve executar o metodo logout', () => {
    expect(usuarioRepository.logout()).toBeTruthy();
  });
});
