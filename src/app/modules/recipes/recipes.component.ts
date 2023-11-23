import {
  AfterContentChecked, AfterViewChecked,
  AfterViewInit,
  Component,
  createComponent,
  DoCheck,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';
import {RecipeService} from "../../service/recipe.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit{

  public letterList: Array<string> = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  public mealsArray: Array<any> = new Array<any>();
  public ingredientsArray: Array<Array<any>> = new Array<any>();

  mealName: string = "a";

  constructor(protected recipeService: RecipeService, private sanitizer: DomSanitizer, private renderer:Renderer2, protected elementRef: ElementRef){
  }

  ngOnInit() {
    this.loadMeals()
    console.log(this.elementRef.nativeElement)
  }

  titleIfLengthAbove(title: string) {
    if (title.length < 30) {
      return true
    }
    return false
  }


  log(e: any){
    this.mealsArray = new Array<any>();
    this.ingredientsArray = new Array<any>();
    this.mealName = e.target.textContent;
    this.loadMeals();
  }

  loadMeals(){
    if(!this.mealName){
      this.recipeService.searchByLetter('a').subscribe((res: any) => {
        for(let i of res.meals){
          this.mealsArray.push(i)
          const map =new Map(Object.entries(i))
          var array = new Array<any>()
          for(let j of map.entries()){
            if(j[0].includes("Ingredient") && j[1]){
              array.push(j[1].toString())
            }
          }
          this.ingredientsArray.push(array)
        }
      })
    }else{
      this.recipeService.searchByLetter(this.mealName).subscribe((res: any) => {
        for(let i of res.meals){
          this.mealsArray.push(i)
          const map =new Map(Object.entries(i))
          var array = new Array<any>()
          for(let j of map.entries()){
            if(j[0].includes("Ingredient") && j[1]){
              array.push(j[1].toString())
            }
          }
          this.ingredientsArray.push(array)
        }
      })
    }
  }






}
