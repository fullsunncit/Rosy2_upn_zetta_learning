import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Day 6';
  isChild = false;

  InputName(value: any){
    console.log(value)
  }
  constructor() {
    console.log(' ')
   }

  ngOnInit(): void { 
    console.log(' ')
  }
  show(){
    this.isChild = !this.isChild
  }
}
