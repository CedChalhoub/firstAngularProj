import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn : 'root'
})

export class CartService {

  private items:Array<Object> = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  addItem(produit:Object):void{
    this.items.push(produit);
  }
  getItems():Array<Object>{
    return this.items;
  }
  clearCart():Array<Object>{
    this.items = [];
    return this.items;
  }
  getFrais():Observable<Object>{
    return this.httpClient.get('/assets/shipping.json');
  }

}