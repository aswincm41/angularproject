import { Component } from '@angular/core';
import { StudentserviceService } from './studentservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  users: any;
  constructor(private studentservice:StudentserviceService){
    this.users=studentservice.users();
  }


  
}
