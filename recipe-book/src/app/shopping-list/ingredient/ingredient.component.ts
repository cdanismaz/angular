import {Component, Input, OnInit} from '@angular/core';
import {Ingredient} from "../../shared/ingredents.model";
import {ShoppingService} from "../../services/shopping.service";

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent implements OnInit {

  @Input() ingredient: Ingredient;
  selected: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onIngredientClicked() {
    this.selected = !this.selected;
  }

}
