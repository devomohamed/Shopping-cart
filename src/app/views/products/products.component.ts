import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import * as AOS from "aos";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productList:any
  ProductsType:any = localStorage.getItem('category') || 'all'
  productsView:any=[]

  constructor(private productsService:ProductsService,private cartService:CartService) { }

  filterCategories(category:any){
  if(category==='fashion'){
    this.ProductsType = "men's clothing"
  }else{
    this.ProductsType = category
  }
    localStorage.setItem('category',this.ProductsType)
    this.refreshProducts()
  }

  refreshProducts(){
    let productArr = this.productList.filter((prod:any)=>{
      if(this.ProductsType ==='all'){
        return this.productList
      }
      return prod.category === this.ProductsType
    })
    this.productsView = productArr
  }

  getProducts(){
    this.productsService.getProducts().subscribe({
      next:(data:any)=>{
        // console.log(data);
        this.productList = data
        this.productList.forEach((a:any) => {
          Object.assign({a,quantity:1,total:a.price})
        });
        this.refreshProducts()
      },
      error:(e:any)=>{
        console.log(e);
      }
    })
  }
  addToCart(product:any){
    this.cartService.addToCart(product)
  }

  ngOnInit(): void {

    this.getProducts()

    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }

}
