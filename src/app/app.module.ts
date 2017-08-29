import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Http,HttpModule} from '@angular/http';
import{HttpClient,HttpClientModule} from'@angular/common/http';
import { AppComponent } from './app.component';
import{MyService}from '../providers/myservice.service';
import { RegistrationComponent } from './registration/registration.component'


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
   
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    
  ],
  providers: [MyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
