import {Recipe} from '../models/recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../models/ingredient.model';
import {ShoppingListService} from './shopping-list.service';

@Injectable()

export class RecipeService {

    selectedRecipe = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('دستور پخت ماکارونی',
            'یک توضیح تست برای دستور پخت ماکارونی قرار می دهیم',
            'https://deow9bq0xqvbj.cloudfront.net/image-logo/935735/espageti.jpg',
            [new Ingredient('سیب زمینی', 1), new Ingredient('پیاز', 3)]),
        new Recipe('دستور پخت سوپ',
            'یک توضیح تست برای دستور پخت سوپ ایرانی و تغییرات بوجود آمده قرار می دهیم',
            'http://hamdore.com/wp-content/uploads/2018/01/soup-vermishel.jpg',
            [new Ingredient('رشته سوپی', 1), new Ingredient('سبزیجات', 2)]),
        new Recipe('دستور پخت قرمه سبزی',
            'یک توضیح تست برای دستور پخت قرمه سبزی برای تغییرات قرار می دهیم',
            'http://www.ashpazkhanak.com/wp-content/uploads/%D8%A2%D8%B4%D9%BE%D8%B2%D8%AE%D8%A7%D9%86%DA%A9-%D8%AE%D9%88%D8%B1%D8%B4-%D9%82%D8%B1%D9%85%D9%87-%D8%B3%D8%A8%D8%B2%DB%8C-800x600.jpg',
            [new Ingredient('لوبیا', 2), new Ingredient('گوشت', 2)]),
    ];

    constructor(private shoppingListService: ShoppingListService) {
    }

    getRecipe() {
        return this.recipes.slice();
    }

    addRecipeToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addFromRecipeShoppingList(ingredients);
    }
}