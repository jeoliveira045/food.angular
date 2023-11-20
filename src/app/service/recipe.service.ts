import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  URL_API: string = "https://www.themealdb.com/api/json/v1/1/search.php"

  constructor(protected httpClient: HttpClient) { }

  public search(firstLetter: string){
    return this.httpClient.get(`${this.URL_API}?f=${firstLetter}`)
  }

}
