import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.css']
})
export class MarvelComponent implements OnInit {
  listItems = [
    { name: 'Iron Man', status:'Non Active' },
    { name: 'Spider-Man', status:'Active' },
    { name: 'Black Panther', status:'Active' },
    { name: 'Dead Pool', status:'Active' },
    { name: 'Captain America', status:'Active' },
    { name: 'Ant-Man', status:'Non Active' },
    { name: 'Captain Marvel', status:'Active' },
    { name: 'Hulk', status:'Active' },
    { name: 'Black Widow', status:'Non Active' },
    { name: 'Thor', status:'Non Active' }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
