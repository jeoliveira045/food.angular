import {Component, DoCheck, OnInit} from '@angular/core';
import {RecipeService} from "../../service/recipe.service";
import {DomSanitizer} from "@angular/platform-browser";


class list{
  meals: Array<any> = new Array<any>();
}

class Ingredients{
  name?: string
  measure?: string;
}


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit{

  public mealsArray: Array<any> = new Array<any>();

  public ingredientsArray: Array<Array<Ingredients>> = new Array<any>();


  ingredient: Ingredients = new Ingredients();

  mealName: string = "a";

  constructor(protected recipeService: RecipeService, private sanitizer: DomSanitizer){

  }

  reloadMeals(e: any){
    this.mealsArray = new Array<any>();
    this.ingredientsArray = new Array<any>();
    this.ingredient = new Ingredients()
    if(!this.mealName){
      this.recipeService.search('a').subscribe((res: any) => {
        for(let i of res.meals){
          this.mealsArray.push(i)
          const map =new Map(Object.entries(i))
          var array = new Array<Ingredients>()
          for(let j of map.entries()){
            if(j[0].includes("Ingredient") && j[1]){
              this.ingredient.name = j[1].toString()
              array.push(this.ingredient)
            }
          }
          for(let j of map.entries()){
            for( let i = 0;i < array.length; i++){
              array[i].measure = j[1].toString()
            }
          }
          this.ingredientsArray.push(array)
        }
      })
    }else{
      this.recipeService.search(this.mealName).subscribe((res: any) => {
        for(let i of res.meals){
          this.mealsArray.push(i)
          const map =new Map(Object.entries(i))
          var array = new Array<Ingredients>()
          for(let j of map.entries()){
            if(j[0].includes("Ingredient") && j[1]){
              this.ingredient.name = j[1].toString()
              array.push(this.ingredient)
            }
          }
          for(let j of map.entries()){
            for( let i = 0;i < array.length; i++){
              array[i].measure = j[1].toString()
            }
          }
          this.ingredientsArray.push(array)
        }
      })
    }
  }

  ngOnInit() {
    this.recipeService.search(this.mealName).subscribe((res: any) => {
      for(let i of res.meals){
        this.mealsArray.push(i)
        const map =new Map(Object.entries(i))
        var array = new Array<Ingredients>()
        for(let j of map.entries()){
          if(j[0].includes("Ingredient") && j[1]){
            this.ingredient.name = j[1].toString()
            array.push(this.ingredient)
          }
        }
        for(let j of map.entries()){
          for( let i = 0;i < array.length; i++){
            array[i].measure = j[1].toString()
          }
        }
        this.ingredientsArray.push(array)
      }
    })
  }

}
