import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  @Input()
  public title: string;
  
  constructor() { }

  ngOnInit() {
    console.log('Translated title ', this.title);
  }

}
