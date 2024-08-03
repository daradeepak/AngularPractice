import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _url = "https://dummyjson.com/products";//Spring API for Getmapping method

  constructor(private _http: HttpClient) { }

  public getProducts(): Observable<any> {
    return this._http.get(this._url);
  }
}