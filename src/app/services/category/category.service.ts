import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: Http) { }
  getAllCategories() {
    const url = 'http://192.168.1.23/maxshop/maxshop/public/index.php/api/categories';
    return this.http.get(url)
      .toPromise()
      .then(res => res.json().data);
  }
}
