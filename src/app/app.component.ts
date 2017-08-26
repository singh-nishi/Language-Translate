import { Component,OnInit  } from '@angular/core';
import{MyService}from './myservice.service'
import { Observable} from 'rxjs';
import {Http, Response} from '@angular/http';
import{urlHash}from'./config'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyService]
})
export class AppComponent implements OnInit {
  public generalInfo : any;
  data:any;
  lang:any;
  public city : string;
  private posts:any;
  private errorMessage:any = '';
   constructor(public myservice: MyService) {
    // this.data = myservice.getJSON();
    // console.log("data Details:" + this.data);
    this.getPosts();

    }

   ngOnInit() {
      this.lang = window.navigator.language; 
     console.log(this.lang);
    
   
}
getPosts() {
  this.myservice.getJSON()
      .subscribe(
          posts => this.posts = posts,
          error => this.errorMessage = <any>error);
}

}
