import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredents.model";
import {Subject} from "rxjs/internal/Subject";

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private ingredients: Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatos',10),
  ];

  ingredientsChanged = new Subject<Ingredient[]>();

  constructor() { }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients);
  }

  getIngredients() : Ingredient[] {
    return this.ingredients.slice();
  }

}
