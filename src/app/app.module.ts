import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Http,HttpModule} from '@angular/http';
import{HttpClient,HttpClientModule} from'@angular/common/http';
import { AppComponent } from './app.component';
import{MyService}from '../providers/myservice.service';
import { RegistrationComponent } from './registration/registration.component'

import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateLoader, TranslateStaticLoader, MissingTranslationHandler } from 'ng2-translate';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, './assets/data', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
   
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
  })
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
