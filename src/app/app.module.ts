import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {TranslateModule} from 'ng2-translate';
import { AppComponent } from './app.component';
import{MyService}from '../providers/myservice.service';
import { RegistrationComponent } from './registration/registration.component'
import { TRANSLATION_PROVIDERS, TranslatePipe, TranslateService }   from './translate';
@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
     TranslatePipe,
   ],
  imports: [
    BrowserModule,
    HttpModule,
    TranslateModule.forRoot()
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
