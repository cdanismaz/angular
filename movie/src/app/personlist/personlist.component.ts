import { Component, OnInit } from '@angular/core';
import {Person} from "../model/person.model";

@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.css']
})
export class PersonlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  personList: Person[] = [
    new Person("Cansu", "Danismaz", 30),
    new Person("Furkan", "Danismaz", 35)
  ]

  onPersonClicked(p: Person) {
    alert(p.name + " " + p.surname);
  }
}
