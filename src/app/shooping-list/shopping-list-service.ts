import { Ingredient } from "../shared/ingredient.model";
import { Subject } from 'rxjs/Subject';

export class ShoppingListService {

    ingredientsChanged = new Subject<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatoes', 10)
    ];

    constructor() {}

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push( ingredient );
        this.emitIngredientsChanged();
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.emitIngredientsChanged();
    }

    private emitIngredientsChanged() {
        this.ingredientsChanged.next( this.ingredients.slice() );
    }
}