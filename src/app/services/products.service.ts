import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  url:string = 'https://fakestoreapi.com/'

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get(this.url+'products')
    .pipe(map((res:any)=>{
      return res
    }))
  }
}
