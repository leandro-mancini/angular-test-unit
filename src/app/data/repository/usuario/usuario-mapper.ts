import * as automapper from 'automapper-ts';

import { Mapper } from '../../base/mapper';
import { UsuarioRequest } from '../../request/usuario-request';
import { UsuarioModel } from '../../../core/domain/entity/usuario-model';
export class UsuarioMapper extends Mapper<UsuarioRequest, UsuarioModel> {
  mapFrom(param: UsuarioRequest): UsuarioModel {
    automapper.createMap('UsuarioModel', UsuarioModel);

    return automapper.map('UsuarioModel', UsuarioModel, param);
  }

}
