import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { UserResult } from '../models/userResult';
import { NotifyService } from './notify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = `${environment.baseUrl}/userauth`

  private currentUserSubject: BehaviorSubject<User>
  public currentUser: Observable<User>
  public currentUserTokenSubject: BehaviorSubject<string>
  public currentUserToken: Observable<string>

  constructor(private http: HttpClient, private notify: NotifyService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')))
    this.currentUser = this.currentUserSubject.asObservable()
  }

  public get currentUserValue(): User {     // <-- recuperar usuario logado
    return this.currentUserSubject.value
  }

  public get currentUserTokenValue(): string {  // <-- recuperar token do usuario logado
    return this.currentUserTokenSubject.value
  }

  login(username, password): Observable<UserResult> {
    return this.http.post<UserResult>(`${this.baseUrl}/login`, { username, password })
      .pipe(map(data => {
        localStorage.setItem('currentUser', JSON.stringify(data.object))
        localStorage.setItem('tokenUser', JSON.stringify(data.token))
        this.currentUserSubject.next(data.object)        
        return data
      }));
  }

  logout() {    
    localStorage.removeItem('currentUser')
    localStorage.removeItem('tokenUser')
    this.currentUserSubject.next(null)    
  }


  ShowMessageSuccess(message: string, duration: number): void {
    this.notify.ShowMessageSuccess(message, duration)
  }

  ShowMessageError(message: string, duration, number): void {
    this.notify.ShowMessageError(message, duration)
  }
}
