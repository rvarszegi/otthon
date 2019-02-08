import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { User} from '../model/User';
import { UserService } from '../user.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
 // tslint:disable-next-line:no-input-rename
 @Input('pageChange') pageChange: EventEmitter  <string>;
 private currentLink = '/';

  users = [];

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private UserService: UserService) {}

    ngOnInit() {

      this.pageChange.subscribe(
        (url) => {this.currentLink = url; }

      );
      this.users = this.UserService.getAll();
      const user1 = this.UserService.getOne(1);
    }

    getActiveUsers() {
      const actives = [];
      for (const i of this.users) {
        if (i.active) {
          actives.push(i);
        }
      }
      return actives;
    }
    onNewUser(user: User) {
      const lastID = this.users[this.users.length - 1].id;
      user.id = lastID + 1;
      this.users.push(user);
    }
    onChangeActive(user: User) {
      this.UserService.changeStatus(user);
      console.log(this.users);
    }





}
