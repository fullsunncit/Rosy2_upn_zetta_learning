import { Component, OnInit } from '@angular/core';
export interface Item {id : string , name : string , price : number} 
export interface selectedItem {id : string , name : string , price : number, amount : number}


@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.css']
})
export class CashierComponent implements OnInit {
  public items: Item[]= [
    {id:'1', name: 'Mie Angel', price: 10000},
    {id:'2', name: 'Mie Setan', price: 10000},
    {id:'3', name: 'Mie Iblis', price: 10000},
    {id:'4', name: 'Udang Rambutan', price: 10000},
    {id:'5', name: 'Udang Keju', price: 10000},
    {id:'6', name: 'Lumpia Udang', price: 10000},
    {id:'7', name: 'Siomay', price: 10000},
    {id:'8', name: 'Pangsit Goreng', price: 10000},
    {id:'9', name: 'Es Teh', price: 5000},
    {id:'10', name: 'Es Tuyul', price: 5000},
  ]
  public selectedItems: selectedItem[] = []

  constructor() { }

  ngOnInit(): void {
  }

  addItem(item :Item){
    const duplicated =this.selectedItems.findIndex(({id})=>id===item.id)
    let amount : 0;
    if(duplicated >= 0){
      this.selectedItems[duplicated].amount+=1
    }
    else{
      this.selectedItems.push({...item, amount: 1})
    }
  }

}
