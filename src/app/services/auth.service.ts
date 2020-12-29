import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { DataResult } from '../models/dataResult';
import { User } from '../models/user';
import { UserResult } from '../models/userResult';
import { NotifyService } from './notify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = `${environment.baseUrl}/auth`
  userResult: UserResult
  private currentUserSubject: BehaviorSubject<User>
  public currentUser: Observable<User>

  constructor(
    private http: HttpClient, private notify: NotifyService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')))
    this.currentUser = this.currentUserSubject.asObservable()
  }

  register(username, password): Observable<DataResult> {
    return this.http.post<DataResult>(`${this.baseUrl}/Register`, { username, password })
  }

  login(username, password): Observable<UserResult> {
    return this.http.post<UserResult>(`${this.baseUrl}/Login`, { username, password })
      .pipe(map(data => {
        this.userResult = data
        this.setSession()
        this.currentUserSubject.next(data.object)  
        return data
      }));
  }

  setSession() {
    localStorage.setItem('currentUser', JSON.stringify(this.userResult.object)) // <-- é necessário transformar json em string para setar em localstorage
    localStorage.setItem('tokenUser', this.userResult.token)
  }  

  logout() {
    localStorage.removeItem('currentUser')
    localStorage.removeItem('tokenUser')
    this.currentUserSubject.next(null)    
  }

  public get currentUserValue(): User {     // <-- recuperar usuario logado
    return this.currentUserSubject.value
  }

  
  ShowMessageSuccess(message: string, duration: number): void {
    this.notify.ShowMessageSuccess(message, duration)
  }

  ShowMessageError(message: string, duration, number): void {
    this.notify.ShowMessageError(message, duration)
  }
}
