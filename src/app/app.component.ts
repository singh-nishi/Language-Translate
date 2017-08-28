import { Component,OnInit,Inject,Injectable } from '@angular/core';
import{MyService}from '../providers/myservice.service'
import { Observable} from 'rxjs';
import {Http, Response} from '@angular/http';
import {Subscription } from 'rxjs';
import{urlHash}from'./config';
// import { TranslateService } from './translate';
import {TranslateService} from '@ngx-translate/core';
@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyService]
})
@Injectable()
export class AppComponent implements OnInit {
  public generalInfo : any;
  data:any;
  lang:any;
  public city : string;
  private posts:any;
  private errorMessage:any = '';
  public translatedText: string;
  public supportedLanguages: any[];

  private subscription: Subscription;
   constructor(public myservice: MyService,private translate: TranslateService) {
   // this.data = myservice.getJSON();
   // console.log("data Details:" + this.data);
   this.lang = window.navigator.language; 
   translate.addLangs(['en','fr']);
    this.getPosts();
    translate.use('fr');
    // alert(translate.use('fr')+"lantra");
    // console.log(translate.use('fr')+"lantra");

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
          this.translate.use('fr');
          //alert(this.translate);
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

