import { Component, OnInit, AfterContentChecked, Output, EventEmitter, Input } from '@angular/core';
import { SelectedItem } from '../cashier/cashier.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit, AfterContentChecked {
  @Input() items!: SelectedItem[];
  @Output() itemChanges : EventEmitter<SelectedItem[]> = new EventEmitter <SelectedItem[]>;

  public total :number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentChecked(): void {
    console.log("tes")
    this.total = this.items.reduce((total, item) => total += item.amount * item.price , 0)
  }

  // removeItem(itemToBeRemoved:SelectedItem){
  //   const itemIndex = this.items.findIndex(({id}) => id ===itemToBeRemoved.id)
  //   const itemRef = this.items[itemIndex]
  //   if(this.items[itemIndex].amount>1){
  //     this.items[itemIndex].amount-=1
  //   }
  //   else{
  //     this.items.splice(itemIndex,1);
  //   }
  // }
}
