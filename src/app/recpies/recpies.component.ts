import {Component, OnInit} from '@angular/core';
import {Recipe} from '../shared/models/recipe.model';
import {RecipeService} from '../shared/services/recipe.service';

@Component({
    selector: 'app-recpies',
    templateUrl: './recpies.component.html',
    styleUrls: ['./recpies.component.css'],
    providers: [RecipeService]
})
export class RecpiesComponent implements OnInit {
    recipe: Recipe;

    constructor(private recipeService: RecipeService) {
    }

    ngOnInit() {
        this.recipeService.selectedRecipe.subscribe(
            (recipe: Recipe) => {
                this.recipe = recipe;
            }
        );
    }

}
