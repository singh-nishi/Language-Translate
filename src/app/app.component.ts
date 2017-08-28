import { Component,OnInit  } from '@angular/core';
import{MyService}from '../providers/myservice.service'
import { Observable} from 'rxjs';
import {Http, Response} from '@angular/http';
import{urlHash}from'./config';
// import { TranslateService } from './translate';
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
  public translatedText: string;
  public supportedLanguages: any[];
   constructor(public myservice: MyService) {
    this.data = myservice.getJSON();
    console.log("data Details:" + this.data);
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
// import { Component, OnInit } from '@angular/core';
// import { TranslateService } from './translate';

// @Component({
//     moduleId: module.id,
//     selector: 'app-root',
//     templateUrl: 'app.component.html',
// })

// export class AppComponent implements OnInit {

//     public translatedText: string;
//     public supportedLanguages: any[];

//     constructor(private _translate: TranslateService) { }

//     ngOnInit() {
//         // standing data
//         this.supportedLanguages = [
//         { display: 'English', value: 'en' },
//         { display: 'Español', value: 'es' },
//         { display: '华语', value: 'zh' },
//         ];

//         // set current langage
//         //this.selectLang('es');
//     }

//     isCurrentLang(lang: string) {
//         // check if the selected lang is current lang
//         return lang === this._translate.currentLang;
//     }

//     selectLang(lang: string) {
//         // set current lang;
//         this._translate.use(lang);
//         this.refreshText();
//     }

//     refreshText() {
//         // refresh translation when language change
//         this.translatedText = this._translate.instant('hello world');
//     }
// }

