import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../shared/models/recipe.model';
import {RecipeService} from '../../shared/services/recipe.service';

@Component({
    selector: 'app-recpie-detail',
    templateUrl: './recpie-detail.component.html',
    styleUrls: ['./recpie-detail.component.css']
})
export class RecpieDetailComponent implements OnInit {
    @Input() recpie: Recipe;

    constructor(private recipeService: RecipeService) {
    }

    ngOnInit() {
    }

    addToShoppingList() {
        this.recipeService.addRecipeToShoppingList(this.recpie.ingredients);
    }
}
