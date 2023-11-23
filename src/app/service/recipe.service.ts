import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  URL_API: string = "https://www.themealdb.com/api/json/v1/1/"

  constructor(protected httpClient: HttpClient) { }

  public searchByLetter(firstLetter: string):Observable<any>{
    return this.httpClient.get(`${this.URL_API}search.php?f=${firstLetter}`)
  }

  public findById(id: number){
    return this.httpClient.get(`${this.URL_API}lookup.php?i=${id}`)
  }

  public search(word: string): Observable<any>{
    return this.httpClient.get(`${this.URL_API}search.php?s=${word}`)
  }

}
