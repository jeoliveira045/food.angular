import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientsRoutingModule } from './ingredients-routing.module';
import { IngredientsComponent } from './ingredients.component';
import {IngredientsService} from "../../service/ingredients.service";


@NgModule({
  declarations: [
    IngredientsComponent
  ],
  imports: [
    CommonModule,
    IngredientsRoutingModule
  ],
  providers: [
    IngredientsService
  ]
})
export class IngredientsModule { }
