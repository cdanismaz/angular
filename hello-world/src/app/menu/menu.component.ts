import { Component, OnInit } from '@angular/core';
import {MenuItem} from "../model/menu-item.model";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  menu: MenuItem[] = [
    new MenuItem("Organization",null, [
      new MenuItem("Sub1-Organization",null,null),
      new MenuItem("Sub2-Organization", null,null)
    ]),
    new MenuItem("Projects",null,[
      new MenuItem("Sub1-Projects",null,null),
      new MenuItem("Sub2-Projects",null,null),
      new MenuItem("Sub3-Projects",null,null)
    ]),
    new MenuItem("Cost Report",null,null)
  ];
}
