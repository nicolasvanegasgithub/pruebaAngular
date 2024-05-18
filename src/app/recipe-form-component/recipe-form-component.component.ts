import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-form-component',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers:  [ RecipeService ],
  templateUrl: './recipe-form-component.component.html',
  styleUrl: './recipe-form-component.component.css'
})
export class RecipeFormComponentComponent {
  constructor(private recipeService: RecipeService,
    private router: Router
  ) {
    // Now you can use this.heroService in your component
  }
  recipeForm = new FormGroup({
    nombre: new FormControl(''),
    ingredientes: new FormControl(''),
    instrucciones: new FormControl(''),
    tiempoCoccion: new FormControl(''),
    tiempoPrep: new FormControl('')
  });

  onSubmit() {
    const formData = this.recipeForm.value;
    console.log(formData);
    this.recipeService.setFormData(formData);
    this.router.navigate(['/recipeList']);
  }
}
