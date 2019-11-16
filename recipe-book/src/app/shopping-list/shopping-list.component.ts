import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredents.model";
import {ShoppingService} from "../services/shopping.service";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {

  ingredients : Ingredient[];
  private ingredientsChangedSubscription: Subscription;

  constructor(private sService: ShoppingService) {

  }

  ngOnInit() {
    this.ingredients = this.sService.getIngredients();
    this.ingredientsChangedSubscription = this.sService.ingredientsChanged.subscribe(ing => {
      this.ingredients = ing;
    });
  }

  ngOnDestroy(): void {
    this.ingredientsChangedSubscription.unsubscribe();
  }


}
