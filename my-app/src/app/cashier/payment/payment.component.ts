import { Component, OnInit, Input, Output, EventEmitter, AfterContentChecked } from '@angular/core';
import { Item } from '../cashier/cashier.component';
import { selectedItem } from '../cashier/cashier.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit, AfterContentChecked {
  @Output ('itemAdded') onAddItem : EventEmitter<Item> = new EventEmitter<Item>()
  @Input() items!: selectedItem[];

  public total:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    this.total = this.items.reduce((total, item) => total += item.amount * item.price , 0)
  }
}
