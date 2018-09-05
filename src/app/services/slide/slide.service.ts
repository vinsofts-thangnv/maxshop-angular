import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SlideService {

  constructor(private http: Http) { }

  getAllSlide() {
    return this.http.get('http://192.168.1.23/maxshop/maxshop/public/index.php/api/slides')
    .toPromise()
    .then(res => res.json())
    .then(resjson => resjson.data);
  }
}
