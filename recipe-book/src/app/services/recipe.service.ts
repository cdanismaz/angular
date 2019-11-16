import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "../shared/recipe.model";
import {Subject} from "rxjs/internal/Subject";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(1,'A Test Recipe1', 'This is simply a test', 'https://torange.biz/photo/38/IMAGE/pizza-health-recipe-38030.jpg'),
    new Recipe(2,'A Test Recipe2', 'This is simply a test', 'https://torange.biz/photo/38/IMAGE/pizza-health-recipe-38030.jpg')
  ];

  //recipeSelected = new EventEmitter<Recipe>();
  //recipeSelected = new Subject<Recipe>();

  constructor() { }

  addRecipe(recipe: Recipe) : void {
    this.recipes.push(recipe);
  }

  getRecipes() : Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(id: number) : Recipe {
    let searchResult = this.recipes.filter(r => r.id === id);
    if(searchResult.length > 0) {
      return searchResult[0];
    }
    else {
      return null;
    }
  }

  // triggerRecipeSelected(recipe: Recipe): void {
  //   this.recipeSelected.next(recipe);
  // }

}
