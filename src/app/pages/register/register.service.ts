import { Injectable } from '@angular/core';
import { UserRepositoryService } from 'src/app/mock/user-repository.service';
import { DataResult } from 'src/app/models/dataResult';
import { User } from 'src/app/models/user';
import { UserRegister } from 'src/app/models/userRegister';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private repository: UserRepositoryService) { }

  register(userRegister: UserRegister): DataResult {
    let exists = this.repository.exist(userRegister.username)
    if (exists)
      return new DataResult(false, 'Já existe usuário cadastrado com este nome! ', null)

    let user = new User()
    user.username = userRegister.username
    user.password = userRegister.password
    this.repository.register(user)
    return new DataResult(true, 'Castro realizado com sucesso! ', userRegister)
  }

}
