import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {RecipeService} from "../../../service/recipe.service";

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.scss']
})
export class RecipePageComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private recipeService: RecipeService){

  }

  ngOnInit(){
    console.log(this.activatedRoute.params)

  }

}
