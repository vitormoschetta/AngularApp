import { Injectable } from '@angular/core';
import { UserRepository } from 'src/app/mock/userRepository';
import { DataResult } from 'src/app/models/dataResult';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userRepository: UserRepository

  constructor(
    private authService: AuthService
  ) {
    this.userRepository = new UserRepository()
  }

  updatePassword(password: string, newPassword: string): DataResult {
    let userName = this.authService.currentUserNameValue
    let user = this.userRepository.login(userName, password)
    if (user == null) 
      return new DataResult(false, 'Senha antiga não confere! ', null)

    this.userRepository.updatePassword(userName, newPassword)    
    return new DataResult(true, 'Senha alterada com sucesso! ', null)    
  } 

}
