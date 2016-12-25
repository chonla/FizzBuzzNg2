import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FizzbuzzService {

  constructor(private http: Http) { }

  count(value: String) {
      return this.http.get("http://127.0.0.1:8080/fizzbuzz/count/" + value)
        .map((res) => {
            return res.json();
        })
  }

}
