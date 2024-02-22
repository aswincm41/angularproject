import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {

  constructor() { }
  users(){
    return[
      {name:'aswin',age:'24',email:'aswin@gmail.com'},
      {name:'fazijal',age:'31',email:'fazsham@gmail.com'},
    ]
  }
}
