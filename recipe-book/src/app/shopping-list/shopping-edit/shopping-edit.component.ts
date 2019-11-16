import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredents.model";
import {ShoppingService} from "../../services/shopping.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', {static: true}) name: ElementRef;
  @ViewChild('amountInput', {static: true}) amount: ElementRef;
  addButtonDisabled: boolean = true;

  constructor(private sService: ShoppingService) {
  }

  ngOnInit() {
  }

  onAddIngredientClicked() {
    let ingredient = new Ingredient(this.name.nativeElement.value, parseInt(this.amount.nativeElement.value));
    this.sService.addIngredient(ingredient);
  }

  changed() {
    if (this.name.nativeElement.value == "" || this.amount.nativeElement.value == "") {
      this.addButtonDisabled = true;
    }
    else {
      this.addButtonDisabled = false;
    }
  }

  onClearClicked() {
    this.name.nativeElement.value = "";
    this.amount.nativeElement.value = "";
  }
}
