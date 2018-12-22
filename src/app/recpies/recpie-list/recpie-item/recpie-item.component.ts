import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from '../../../shared/models/recipe.model';
import {RecipeService} from '../../../shared/services/recipe.service';


@Component({
    selector: 'app-recpie-item',
    templateUrl: './recpie-item.component.html',
    styleUrls: ['./recpie-item.component.css']
})
export class RecpieItemComponent implements OnInit {
    @Input() recipe: Recipe;

    constructor(private recipeService: RecipeService) {
    }

    ngOnInit() {
    }

    onSelectRecipe() {
        this.recipeService.selectedRecipe.emit(this.recipe);
    }
}
