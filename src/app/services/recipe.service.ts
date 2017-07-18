import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';

@Injectable()
export class RecipeService {
  constructor(private http: Http) { }

  public getRecipes(): Observable<Recipe[]> {
    return this.http.get('https://private-cecec6-recipebookangular4.apiary-mock.com/recipes')
      .map((response: Response) => response.json());
  }
  public getMenu(): Observable<Recipe[]> {
    let menu: Recipe;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post('https://private-866819-recetas2.apiary-mock.com/recipes', menu, options)
      .map((response: Response) => response.json());
  }
}
