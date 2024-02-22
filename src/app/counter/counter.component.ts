import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit{
  public value: number=0
  public counter(){
    this.value++;

  }
  public sub(){
    this.value--;
  
  }
  constructor(){}
  ngOnInit(): void {
    
  }

}
