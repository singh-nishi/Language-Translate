import { Component,OnInit,Inject,Injectable } from '@angular/core';
import{MyService}from '../providers/myservice.service'
import { Observable} from 'rxjs';
import {Http, Response} from '@angular/http';
import{urlHash}from'./config';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyService]
})
@Injectable()
export class AppComponent implements OnInit {
 
  data:any;
  lang:any;
  posts:any;
  errorMessage:any = '';
 
  constructor(public myservice: MyService) {
   this.getPosts();
     }
ngOnInit() {
     // this.lang = window.navigator.language; 
     console.log(this.lang);
    
   }
getPosts() {
  this.myservice.getJSON()
      .subscribe(
          posts => this.posts = posts,
          error => this.errorMessage = <any>error);
         
        }

}

