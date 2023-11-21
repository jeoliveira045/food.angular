import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import {RecipePageComponent} from "./recipe-page/recipe-page.component";

const routes: Routes = [{
  path: '',
  component: RecipesComponent,
  children: [{
    path:'recipe-page/:id',
    component: RecipePageComponent
  }]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
