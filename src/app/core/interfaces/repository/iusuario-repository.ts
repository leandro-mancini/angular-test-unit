import { Observable } from 'rxjs';
import { UsuarioModel } from '../../domain/entity/usuario-model';
import { UsuarioRequest } from 'src/app/data/request/usuario-request';

export abstract class IUsuarioRepository {
  abstract login(param: UsuarioRequest): Observable<UsuarioModel>;
  abstract logout(): Observable<boolean>;
}
