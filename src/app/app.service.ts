import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppState {

  constructor(private http: Http){

  }

  getItems(resource){
    return this.http.get("/api/"+resource).toPromise();
  }   

  getConfig(callback){
    this.http.get("/api/config").toPromise().then(res => {
        callback(res.json());
    }).catch(err => {
        callback(undefined);
    });
  }   
}