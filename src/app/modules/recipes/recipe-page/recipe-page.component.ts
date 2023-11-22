import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {RecipeService} from "../../../service/recipe.service";
import {Meal} from "../../../domain/meal";

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent implements OnInit, AfterViewChecked {

  meal: Meal = new Meal()

  mealMap: Map<string, string> = new Map<string, string>();

  constructor(private activatedRoute: ActivatedRoute,private recipeService: RecipeService){

  }

  regex: RegExp = new RegExp('/\[a-z0-9]+/g')

  ngOnInit(){
    this.loadMeal()
  }

  ngAfterViewChecked(): void {
    this.mealMap = this.convertToMealMap(this.meal.ingredients, this.meal.measures)
  }

  convertToMealMap(key: Array<any>, value: Array<any>): Map<string, string>{
    let map = new Map<string, string>();
    for(let i = 0; i < this.meal.ingredients.length; i++){
      map.set(this.meal.ingredients[i], this.meal.measures[i])
    }
    return map;
  }

  loadMeal(){
    this.activatedRoute.params.subscribe((res) => {
      this.recipeService.findById(res['id']).subscribe((res:any) => {
        this.meal.id = res.meals[0]['idMeal']
        this.meal.name = res.meals[0]['strMeal']
        this.meal.category = res.meals[0]['strCategory']
        this.meal.nacionality = res.meals[0]['strArea']
        this.meal.instructions = res.meals[0]['strInstructions']
        this.meal.image = res.meals[0]['strMealThumb']
        let map = new Map(Object.entries(res.meals[0]))
        for(let j of map){
          if((j[0].includes('Ingredient') && j[1])){
            this.meal.ingredients.push(j[1].toString())
          }else if((j[0].includes('Measure') && this.isSpaceEmpty(j[1]) != -1)){
            this.meal.measures.push(<string>j[1])
          }
        }
      })
    })
  }

  isSpaceEmpty(value: unknown){
    if(typeof value == 'string'){
      return value.toString().search('[a-z0-9]')
    }
    return false;
  }




}
