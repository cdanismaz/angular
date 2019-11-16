import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Person} from "../model/person.model";
import {Subject} from "rxjs/internal/Subject";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input() person: Person;
 // @Output() personClicked = new EventEmitter<void>();
  @Output() personClicked = new Subject<void>();

  constructor() { }

  ngOnInit() {
  }

  onPersonClicked() {
    //alert(this.person.name + this.person.surname );
    //this.personClicked.emit();
    this.personClicked.next();
  }

}
