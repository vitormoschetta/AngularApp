import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataResult } from '../models/dataResult';
import { User } from '../models/user';
import { NotifyService } from './notify.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = `${environment.baseUrl}/userauth`
  
  constructor(private http: HttpClient, private notify: NotifyService) { }

  getAll() {
    return this.http.get<User[]>(`${this.baseUrl}/getall`);
  }

  register(user: User): Observable<DataResult> {
    return this.http.post<DataResult>(`${this.baseUrl}/register`, user);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  ShowMessageSuccess(message: string, duration: number): void {
    this.notify.ShowMessageSuccess(message, duration)
  }

  ShowMessageError(message: string, duration: number): void {
    this.notify.ShowMessageError(message, duration)
  }
}
