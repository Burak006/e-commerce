import { ProductDetailPageModel } from './../models/product-detail-page-model';
import { ProductDetailModel } from './../models/product-detail-model';
import { CategoriesModel } from './../models/CategoriesModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductModel } from '../models/ProductModel.';

import { Observable } from 'rxjs';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  apiUrl="http://localhost:3000/products"

  selectedCategory:CategoriesModel;

  queryPath:string;

  

  constructor(private httpClient:HttpClient) { }

  getGetproducts():Observable<ProductModel[]>{
    return this.httpClient.get<ProductModel[]>("http://localhost:3000/products")
  }

  getFiltrele():Observable<ProductModel[]>{
    return this.httpClient.get<ProductModel[]>("http://localhost:3000/products?supplier.id=5")
  }

  getSort():Observable<ProductModel[]>{
    return this.httpClient.get<ProductModel[]>("http://localhost:3000/products?supplier.id=5")

  }

  getPaginate():Observable<ProductModel[]>{
    return this.httpClient.get<ProductModel[]>("http://localhost:3000/products?_page=2&_limit=2")
  }

  getSlice():Observable<ProductModel[]>{
    return this.httpClient.get<ProductModel[]>("http://localhost:3000/products?_start=20&_end=30")
    
  }

  getFullTextSearch():Observable<ProductModel[]>{
    return this.httpClient.get<ProductModel[]>("http://localhost:3000/products?q=pkgs")
  }

  getOperator():Observable<ProductModel[]>{
    return this.httpClient.get<ProductModel[]>("http://localhost:3000/products?name_like=Grandma's Boysenberry Spread")
  }

  getRelationship():Observable<ProductModel[]>{
    return this.httpClient.get<ProductModel[]>("http://localhost:3000/products?_embed=id")

  }

  getProductDetailBy(id:number):Observable<ProductDetailModel>{
    
    return this.httpClient.get<ProductDetailModel>("http://localhost:3000/products"+"/"+id)

  }

  getProductDetailByPageNumber(page:number):Observable<ProductDetailModel[]>{
    return this.httpClient.get<ProductDetailModel[]>("http://localhost:3000/products"+"?_page="+page)

  }

  getProductLimit(page:number,limit:number):Observable<ProductDetailModel[]>{
    return this.httpClient.get<ProductDetailModel[]>(this.apiUrl+"?_page="+page+"&_limit="+limit)
  }
  
  setSelectedCategory(category){
    this.selectedCategory=category;
  }

  createApiUrl(){
    if(this.selectedCategory){
      this.queryPath=this.apiUrl+ '?categoryId=' +this.selectedCategory.id;
    }
    if(this.selectedCategory ){

      this.queryPath=this.apiUrl+'?categoryId='+this.selectedCategory.id +"&categoryId=" +this.selectedCategory.id
    }

    if(!this.queryPath && !this.queryPath){
      this.queryPath=this.apiUrl;
    }

    return this.queryPath;
  }




  
  }

