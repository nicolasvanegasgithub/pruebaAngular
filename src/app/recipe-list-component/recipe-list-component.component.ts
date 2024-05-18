import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list-component',
  standalone: true,
  imports: [],
  providers:  [ RecipeService ],
  templateUrl: './recipe-list-component.component.html',
  styleUrl: './recipe-list-component.component.css'
})
export class RecipeListComponentComponent implements OnDestroy{
  subscription: Subscription;
  recipe: any = [];
  constructor(private recipeService: RecipeService) {
    this.subscription = this.recipeService.getFormData().subscribe(recipe => {
      console.log(recipe);
      if (recipe) {
        this.recipe.push(recipe);
      } else {
          this.recipe = [];
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
