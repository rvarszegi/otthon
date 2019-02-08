import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/model/User';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css']
})
export class UserManagerComponent implements OnInit {

  @Output() newUser: EventEmitter <any> = new EventEmitter;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private UserService: UserService) { }

  ngOnInit() {
  }
  submitForm(form) {
    console.log(form);
    if (!form.valid) {
      return false;
    }
    const values = form.value;
    const user = new User(1, values.lastName, values.firstName, values.email, values.phone, '', true );
    this.UserService.pushOne(user);
  }
  checkError(form, controls) {


    if (!controls) {
      return false;
    }
    if (controls.pristine && !form.submitted) {
      return false;
    }
    if (!controls.errors) {
      return false;
    }
    if (controls.errors === null) {
      return false;
    }
    return true;
  }
}
