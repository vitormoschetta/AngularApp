import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserRepository } from 'src/app/mock/userRepository';
import { DataResult } from 'src/app/models/dataResult';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userRepository: UserRepository
  private currentUserSubject: BehaviorSubject<User>
  public currentUser: Observable<User>

  constructor() {
    this.userRepository = new UserRepository()
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')))
    this.currentUser = this.currentUserSubject.asObservable()
  }

  login(username: string, password: string): DataResult {
    let data = this.userRepository.login(username, password)
    if (data != null) {
      localStorage.setItem('currentUser', JSON.stringify(data))
      this.currentUserSubject.next(data)
      return new DataResult(true, 'Login efetuado! ', data)
    }
    else
      return new DataResult(false, 'Login inválido! ', data)
  }

  logout() {
    localStorage.removeItem('currentUser')
    this.currentUserSubject.next(null)
  }

  public get currentUserValue(): User {     // <-- recuperar usuario logado
    return this.currentUserSubject.value
  }

  public get currentUserNameValue(): string {     // <-- recuperar usuario logado
    return this.currentUserSubject.value.username
  }


}
