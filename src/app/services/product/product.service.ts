import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: Http) { }

  getAllProduct(): any {
    return this.http.get('http://192.168.1.23/maxshop/maxshop/public/index.php/api/products').toPromise().then(res => res.json());
  }
}