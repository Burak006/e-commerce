import { Observable } from 'rxjs';
import { CategoriesModel } from './../models/CategoriesModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private httpClient:HttpClient) { }

  getCategories():Observable<CategoriesModel[]>{
    return this.httpClient.get<CategoriesModel[]>("http://localhost:3000/categories")
  }

  //servisler angularda state management aracıdır.datayı serviste tutacağız
  
}
