import { Injectable } from '@angular/core';
import { User } from './model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Array<User> = [];
  constructor() {
    const user1 = new User(1, 'asd', 'asd', 'asd', '213465', 'asder', true);
    const user2 = new User(2, 'asd', 'asd', 'asd', '213465', 'asder', true);
    const user3 = new User(3, 'asd', 'asd', 'asd', '213465', 'asder');
    this.users.push(user1);
    this.users.push(user2);
    this.users.push(user3);
  }

  getAll() {
    return this.users;
  }

  getUserIndex(id) {
    let index = null;
    for (const i = 0; i < this.users.length;) {
      if (this.users[i].id === id) {
        index = i;
      }
    }
    return index;
  }

  getOne(id: Number) {
    const index = this.getUserIndex(id);
    if (index === null) {
      return index;
    }
    return this.users[index];
  }
  getTopID() {
    let topID = this.users[0].id;
    for (const user of this.users) {
      if (user.id > topID) {
        topID = user.id;
      }
    }
    return topID;
  }
  pushOne(user: User) {
    // tslint:disable-next-line:no-unused-expression
    const topID = this.getTopID() + 1;
    this.users.push(user);
    console.log(this.users);
  }

  changeStatus(user: User) {
    const index = this.getUserIndex(user.id);
    if (index !== null) {
      this.users[index].active = !this.users[index].active;
    }
  }
}
