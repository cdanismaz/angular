import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserModel} from "../model/user.model";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: UserModel;
  @Input() isActive: boolean;
  @Input() index: number;

  constructor(private uService: UserService) { }

  ngOnInit() {
  }

  onClicked() {
    this.uService.userStatusChanged(this.user, this.isActive, this.index);
  }
}
