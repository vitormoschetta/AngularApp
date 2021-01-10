import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataResult } from 'src/app/models/dataResult';
import { User } from 'src/app/models/user';
import { UserRepositoryService } from '../mock/user-repository.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {  
  private currentUserSubject: BehaviorSubject<User>
  public currentUser: Observable<User>

  constructor(private repository: UserRepositoryService) {    
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')))
    this.currentUser = this.currentUserSubject.asObservable()
  }

  login(username: string, password: string): DataResult {
    let data = this.repository.login(username, password)
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
