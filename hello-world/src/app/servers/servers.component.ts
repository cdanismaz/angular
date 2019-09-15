import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  createdServer = 'There is no created server';
  serverName = "TestServerName";
  username = "";
  serverCreated = false;
  servers = ['TestServer1', 'TestServer2'];
  visible = false;
  logs = [];
  clickCount = 1;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  toggleVisibility() {
    this.visible = !this.visible;
    var log = {
      id: this.clickCount,
      message: "button click number is " + this.clickCount
    }
    this.logs.push(log);
    this.clickCount++;
  }
  ngOnInit() {
  }

  onCreatedServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.createdServer = 'Server created and its name is' + this.serverName;
  }

  onUpdateServerName(event) {
    this.serverName = (<HTMLInputElement>event.target).value;
    //console.log(event);

  }

  isUsernameEmpty() {
    return this.username.length == 0;
  }
  
  onClearButtonClicked() {
    this.clearInput();
  }

  clearInput() {
    this.username = "";
  }

}
