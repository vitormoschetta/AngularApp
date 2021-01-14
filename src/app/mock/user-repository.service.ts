import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserRepositoryService {
  list: User[]

  constructor() {
      this.list = [
          { username: 'admin', role: 'admin', password: "123456", active: true },
          { username: 'user', role: 'user', password: "123456", active: true },
          { username: 'other', role: 'user', password: "123456", active: false },
      ];
  }

  getAll(): User[] {
      return this.list
  }

  register(user: User): void {      
      this.list.push(user)
  }

  login(username: string, password: string): User {
      return this.list.find(
          x => x.username == username && 
          x.password == password)
  }

  updatePassword(username: string, newPassword: string): void {
      let item = this.list.find(x => x.username == username)
      item.password = newPassword
  }

  updateStatus(username: string, active: boolean): void {
    let item = this.list.find(x => x.username == username)
    item.active = active
}

  exist(username: string): boolean {
      var item = this.list.find(x => x.username == username)
      if (item == undefined)
          return false
      return true
  }
}
