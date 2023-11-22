import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import {RecipeService} from "../../service/recipe.service";
import {FormsModule} from "@angular/forms";
import { RecipePageComponent } from './recipe-page/recipe-page.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';


@NgModule({
  declarations: [
    RecipesComponent,
    RecipePageComponent,
    RecipeListComponent
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
