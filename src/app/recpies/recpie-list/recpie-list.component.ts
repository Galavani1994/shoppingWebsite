import {Component, OnInit} from '@angular/core';
import {Recipe} from '../../shared/models/recipe.model';
import {RecipeService} from '../../shared/services/recipe.service';


@Component({
  selector: 'app-recpie-list',
  templateUrl: './recpie-list.component.html',
  styleUrls: ['./recpie-list.component.css']
})
export class RecpieListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe();
  }

}
