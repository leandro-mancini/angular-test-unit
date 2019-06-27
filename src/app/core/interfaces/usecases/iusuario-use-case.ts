import { Observable } from 'rxjs';
import { UsuarioRequest } from 'src/app/data/request/usuario-request';
import { UsuarioModel } from '../../domain/entity/usuario-model';

export abstract class IUsuarioUseCase {
  abstract login(param: UsuarioRequest): Observable<UsuarioModel>;
  abstract logout(): Observable<boolean>;
}
