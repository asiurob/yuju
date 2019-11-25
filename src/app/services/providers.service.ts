import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ROUTE } from './route';

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  constructor(
    private HTTP: HttpClient
  ) { }

  public getProviders(): Observable< any > {
    return this.HTTP.get(`${ ROUTE }/`);
  }
}
