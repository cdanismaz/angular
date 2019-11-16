import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {RecipesComponent} from "./recipes/recipes.component";
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {RecipeDetailComponent} from "./recipes/recipe-detail/recipe-detail.component";
import {RecipeStartComponent} from "./recipes/recipe-start/recipe-start.component";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      //{path: "", component: WelcomePageComponent},
      {path: "", redirectTo: "/recipes", pathMatch: "full"},
      {path: "recipes", component: RecipesComponent, children: [
          {path: "", component: RecipeStartComponent},
          {path: "new", component: RecipeEditComponent},
          {path:":id", component: RecipeDetailComponent},
          {path: ":id/edit", component: RecipeEditComponent}
        ]},
      {path: "shopping-list", component: ShoppingListComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
