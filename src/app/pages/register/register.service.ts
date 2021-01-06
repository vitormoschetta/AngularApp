import { Injectable } from '@angular/core';
import { UserRepository } from 'src/app/mock/userRepository';
import { DataResult } from 'src/app/models/dataResult';
import { User } from 'src/app/models/user';
import { UserRegister } from 'src/app/models/userRegister';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  userRepository: UserRepository

  register(userRegister: UserRegister): DataResult {
    let exists = this.userRepository.exist(userRegister.userName)
    if (exists)
      return new DataResult(false, 'Já existe usuário cadastrado com este nome! ', null)
    
    let user = new User()
    user.username = userRegister.userName
    user.password = userRegister.password
    this.userRepository.register(user)
    return new DataResult(true, 'Castro realizado com sucesso! ', userRegister)
  }

}
