import { IUsuarioRepository } from 'src/app/core/interfaces/repository/iusuario-repository';
import { UsuarioModel } from 'src/app/core/domain/entity/usuario-model';
import { Observable, of } from 'rxjs';
import { UsuarioRequest } from '../../request/usuario-request';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { UsuarioMapper } from './usuario-mapper';

export class UsuarioRepository implements IUsuarioRepository {

  private mapper = new UsuarioMapper();

  constructor(private http: HttpClient) { }

  login(param: UsuarioRequest): Observable<UsuarioModel> {
    return this.http
      .get<UsuarioRequest>(environment.serverUrl + '/usuarios?username=' + param.username + '&senha=' + param.password + '')
      .pipe(map((item) => {
        if (item[0]) {
          return this.mapper.mapFrom(item[0]);
        }

        return null;
      }));
  }

  logout(): Observable<boolean> {
    return of(true);
  }

}
