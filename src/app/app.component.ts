import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RecipeListComponentComponent } from './recipe-list-component/recipe-list-component.component';
import { RecipeFormComponentComponent } from './recipe-form-component/recipe-form-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RecipeFormComponentComponent, RecipeListComponentComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba-angular';
}
