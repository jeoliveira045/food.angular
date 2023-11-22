import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientsRoutingModule } from './ingredients-routing.module';
import { IngredientsComponent } from './ingredients.component';
import {IngredientsService} from "../../service/ingredients.service";
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';


@NgModule({
    declarations: [
        IngredientsComponent,
        IngredientsListComponent
    ],
    imports: [
        CommonModule,
        IngredientsRoutingModule
    ],
    exports: [
        IngredientsComponent
    ],
    providers: [
        IngredientsService
    ]
})
export class IngredientsModule { }
