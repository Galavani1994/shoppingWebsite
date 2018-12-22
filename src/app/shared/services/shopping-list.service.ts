import {Ingredient} from "../models/ingredient.model";
import {EventEmitter} from "@angular/core";

export class ShoppingListService {

  ingredientEvent = new EventEmitter<Ingredient[]>()

  private ingredients: Ingredient[] = [
    new Ingredient('بسته ماکارونی', 1),
    new Ingredient('پیاز', 2),
  ]

  getIngredient(){
    return this.ingredients.slice();
  }

  addIngredient(name:string, amount: number){
    this.ingredients.push(new Ingredient(name, amount))
    this.ingredientEvent.emit(this.ingredients.slice())
  }
  addFromRecipeShoppingList(ingredients: Ingredient[]){
    // for(let ingredient of ingredients){
    //   this.ingredients.push(ingredient)
    // }
    this.ingredients.push(...ingredients)
    this.ingredientEvent.emit(this.ingredients.slice())
  }
}