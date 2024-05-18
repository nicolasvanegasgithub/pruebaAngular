import { Routes } from '@angular/router';
import { RecipeListComponentComponent } from './recipe-list-component/recipe-list-component.component';
import { RecipeFormComponentComponent } from './recipe-form-component/recipe-form-component.component';

export const routes: Routes = [
  { path: 'recipeList', component: RecipeListComponentComponent },
  { path: 'recipeForm', component: RecipeFormComponentComponent }
];
