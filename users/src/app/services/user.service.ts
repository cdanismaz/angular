import { Injectable } from '@angular/core';
import {UserModel} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  activeUserList: UserModel[] = [
    new UserModel("cansu",1),
    new UserModel("furkan",2),
    new UserModel("efe",3),
    new UserModel("umut",4)
  ];

  deactiveUserList: UserModel[] = [
    new UserModel("necati",5),
    new UserModel("nesrin",6),
    new UserModel("serap",7)
  ];

  constructor() { }

  userStatusChanged(user: UserModel, currentStatus: boolean, i: number) {
    if(currentStatus) {
      this.deactiveUserList.push(user);
      this.activeUserList.splice(i,1);
    } else {
      this.activeUserList.push(user);
      this.deactiveUserList.splice(i,1);
    }

  }
}
