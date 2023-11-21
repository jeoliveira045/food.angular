import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import {RecipeService} from "../../service/recipe.service";
import {FormsModule} from "@angular/forms";
import { RecipePageComponent } from './recipe-page/recipe-page.component';


@NgModule({
  declarations: [
    RecipesComponent,
    RecipePageComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    FormsModule
  ],
  providers: [
    RecipeService
  ]
})
export class RecipesModule { }
