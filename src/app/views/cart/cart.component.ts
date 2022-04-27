import { Component, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  faTrashAlt = faTrashAlt

  products:any = []
  
  grandTotal:number = 0

  

  constructor(private cartService:CartService) { }

  removeItem(product:any){
    this.cartService.removeCartItem(product)
  }
  emptyCart(){
    this.cartService.removeAllCart()
  }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
      this.products = res
      this.grandTotal = this.cartService.getTotalPrice()
    })
  }


}
