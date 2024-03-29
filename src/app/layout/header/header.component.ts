import { Component, OnInit } from '@angular/core';
import { faShippingFast,faSearch,faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  faShippingFast = faShippingFast
  faSearch = faSearch
  faCartPlus = faCartPlus

  totalItem:number = 0

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res=>{
      this.totalItem = res.length
    })
  }

}
