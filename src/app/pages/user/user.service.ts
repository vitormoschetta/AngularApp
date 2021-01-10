import { Injectable } from '@angular/core';
import { UserRepositoryService } from 'src/app/mock/user-repository.service';
import { DataResult } from 'src/app/models/dataResult';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authService: AuthService, private repository: UserRepositoryService) { }

  updatePassword(password: string, newPassword: string): DataResult {
    let userName = this.authService.currentUserNameValue
    let user = this.repository.login(userName, password)
    if (user == null)
      return new DataResult(false, 'Senha antiga não confere! ', null)

    this.repository.updatePassword(userName, newPassword)
    return new DataResult(true, 'Senha alterada com sucesso! ', null)
  }

}
