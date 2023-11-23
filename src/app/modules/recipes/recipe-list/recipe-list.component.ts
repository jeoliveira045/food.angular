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
import {RecipeService} from "../../../service/recipe.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit{

  public letterList: Array<string> = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  public mealsArray: Array<any> = new Array<any>();
  public ingredientsArray: Array<Array<any>> = new Array<any>();
  mealName: string = "a";
  mealSearchWord: string = "";

  constructor(protected recipeService: RecipeService, private sanitizer: DomSanitizer, private renderer:Renderer2, protected elementRef: ElementRef){
  }

  ngOnInit() {
    this.loadMeals()
    console.log(this.elementRef.nativeElement)
  }

  titleIfLengthAbove(title: string) {
    if(title.length < 30) {
      return true
    }
    return false
  }


  reloadMeals(e: any){
    this.mealsArray = new Array<any>();
    this.mealName = e.target.textContent;
    this.loadMeals();
  }

  loadMeals(){
    if(!this.mealName){
      this.recipeService.searchByLetter('a').subscribe((res: any) => {
        for(let i of res.meals){
          this.mealsArray.push(i)
        }
      })
    }else{
      this.recipeService.searchByLetter(this.mealName).subscribe((res: any) => {
        for(let i of res.meals){
          this.mealsArray.push(i)
        }
      })
    }
  }

  search(e: any){
    this.mealsArray = new Array<any>();
    if(this.mealSearchWord){
      this.recipeService.search(this.mealSearchWord).subscribe((res: any) => {
        for(let i of res.meals){
          this.mealsArray.push(i)
        }
      })
    }else{
      this.loadMeals();
    }
  }

  searchWordIsEmpty(){
    if(this.mealSearchWord){
      return true
    }
    return false;
  }






}
