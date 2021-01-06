import { User } from "src/app/models/user";

export class UserRepository {
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


    // existUpdate(username: string, id: string): boolean {
    //     var item = this.list.find(x => x.username == username && x.id != id)
    //     if (item == undefined)
    //         return false
    //     return true
    // }

    // delete(id: string): void {
    //     for (var i = 0; i < this.list.length; i++) {
    //         if (this.list[i].id == id)
    //             this.list.splice(i, 1)
    //     }
    // }

    // getAll(): User[] {
    //     return this.list
    // }

    // getById(id: string): User {
    //     return this.list.find(x => x.id == id)
    // }

}