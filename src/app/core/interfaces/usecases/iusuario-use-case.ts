import { Observable } from 'rxjs';

export interface IUsuarioUseCase<S, T> {
  login(param: S): Observable<T>;
  logout(): Observable<boolean>;
}
