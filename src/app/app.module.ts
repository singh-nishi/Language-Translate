import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {TranslateModule} from 'ng2-translate';
import { AppComponent } from './app.component';
import{MyService}from './myservice.service'
@NgModule({
  declarations: [
    AppComponent,
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
