import {Component, OnInit} from '@angular/core';
import {Recipe} from "../../shared/recipe.model";
import {RecipeService} from "../../services/recipe.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipeList: Recipe[];

  constructor(private rService: RecipeService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.recipeList = this.rService.getRecipes();
  }

  onNewRecipeClicked() {
    this.router.navigate(["new"], {relativeTo: this.route});
  }
}
