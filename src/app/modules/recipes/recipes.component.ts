import {Component, DoCheck, OnInit} from '@angular/core';
import {RecipeService} from "../../service/recipe.service";
import {DomSanitizer} from "@angular/platform-browser";


class list{
  meals: Array<any> = new Array<any>();
}


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit{

  public mealsArray: Array<any> = new Array<any>();

  public ingredientsArray: Array<Array<{ingredients: string, measurements: string}>> = new Array<any>();

  public ingAndMeasure: {ingredients: string, measurements: string}

  mealName: string = "a";

  constructor(protected recipeService: RecipeService, private sanitizer: DomSanitizer){

  }

  reloadMeals(e: any){
    this.mealsArray = new Array<any>();
    this.ingredientsArray = new Array<any>();
    if(this.mealName == null || this.mealName == ''){
      this.recipeService.search('a').subscribe((res: any) => {
        for(let i of res.meals){
          this.mealsArray.push(i)
          const map =new Map(Object.entries(i))
          var IngArray = new Array<any>()
          for(let j of map.entries()){
            if(j[0].includes("Ingredient")){
              if(j[1]){
                this.ingAndMeasure.ingredients = j[1].toString()
              }
            if(j[0].includes("Measure")){
              if(j[1]){
                this.ingAndMeasure.measurements = j[1].toString()
              }
            }
            }
          }
          this.ingredientsArray.push(IngArray)
        }
      })
    }else{

      this.recipeService.search(this.mealName).subscribe((res: any) => {
        for(let i of res.meals){
          this.mealsArray.push(i)
          const map =new Map(Object.entries(i))
          var array = new Array<any>()
          for(let j of map.entries()){
            if(j[0].includes("Ingredient")){
              if(j[1]){
                array.push(j[1])
              }
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
        var array = new Array<any>()
        for(let j of map.entries()){
          if(j[0].includes("Ingredient")){
            if(j[1]){
              array.push(j[1])
            }
          }
        }
        this.ingredientsArray.push(array)
      }
    })
  }

}
