import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import{urlHash}from'../app/config'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class MyService{
   dataAPI: any;
   lang:any;
  
 constructor(private http: Http) {
    this.lang = window.navigator.language; 
    if (this.lang == 'en-US' ) {
        console.log("language is english");
        this.dataAPI=urlHash['en-us'] 
      }
      else if(this.lang == 'fr'){
          alert(this.lang);
        this.dataAPI=urlHash['fr'] 
        alert(this.dataAPI) ;
      }
      else{
        this.dataAPI=urlHash['en-us'] ;
      }
        }
    getJSON(): Observable<any> {
    return this.http.get(this.dataAPI)
    .map(this.extractData)
    .catch(this.handleError);
}

private extractData(res:Response) {
    let body = res.json();
    return body || [];
}

private handleError(error:any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
   return Observable.throw(errMsg);
}
   
}