import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = `${environment.baseUrl}/user`
  
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>(`${this.baseUrl}/getall`);
  }

  register(user: User) {
    return this.http.post(`${this.baseUrl}/register`, user);
  }

  delete(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
