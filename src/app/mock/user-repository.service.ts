import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserRepositoryService {
  list: User[]

  constructor() {
      this.list = [
          { id: '1', username: 'admin', password: "123456" },
          { id: '2', username: 'user', password: "123456" },
      ];
  }

  register(user: User): void {
      user.id = (this.list.length + 1).toString()
      this.list.push(user)
  }

  login(username: string, password: string): User {
      return this.list.find(x => x.username == username && x.password == password)
  }

  updatePassword(username: string, newPassword: string): void {
      let item = this.list.find(x => x.username == username)
      item.password = newPassword
  }

  exist(username: string): boolean {
      var item = this.list.find(x => x.username == username)
      if (item == undefined)
          return false
      return true
  }
}
