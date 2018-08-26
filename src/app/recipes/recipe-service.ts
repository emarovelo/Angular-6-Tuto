import { Recipe } from "./recipe.model";
import { Injectable } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shooping-list/shopping-list-service";

@Injectable()
export class RecipeService {
    

    private recipes : Recipe[] = [
        new Recipe(
            'Tasty Schnitzel', 
            'A super-tasty Schnitzel', 
            'https://as2.ftcdn.net/jpg/00/91/01/37/500_F_91013778_SewPm4nUkyoeykmr5zsF37psl7quB0xT.jpg',
             [
                 new Ingredient('Meat', 1),
                 new Ingredient('French Fries', 20)
             ]),
        new Recipe(
            'Big far Burger', 
            'What else you need to say?', 
            'https://get.pxhere.com/photo/dish-food-recipe-snack-fast-food-cuisine-sandwich-vegetarian-food-baked-goods-power-supply-junk-food-beirut-mediterranean-food-finger-food-european-food-breakfast-sandwich-american-food-1375814.jpg',
            [
                new Ingredient('Buns', 1),
                new Ingredient('Meat', 1)
            ])
      ];

      constructor(private shoppingListService: ShoppingListService) {}

      getRecipes() {
        return this.recipes.slice();
      }

      addIngredientsToShopingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients( ingredients );
      }

      getRecipe(index: number) {
          return this.recipes[index];
      }
}