import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Day 5';
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
  kasir(){
    this.isChild = !this.isChild
  }
}
