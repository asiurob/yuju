import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ROUTE } from './route';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private HTTP: HttpClient
  ) { }

  public getProducts( size: number, page: number  ): Observable< any > {
    return this.HTTP.get(`${ ROUTE }/76/products/?page=${ page };page_size=${ size }`, { observe: 'response' });
  }
}
