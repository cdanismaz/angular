import { Component } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white
    }
  `]
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = Math.random() > 0.5 ? 'online' : 'offline';

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus =='online' ? 'green':'red';
  }
}