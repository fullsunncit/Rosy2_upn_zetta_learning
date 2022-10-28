import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableUserComponent } from './table-user/table-user.component';
import { TableBookingComponent } from './table-booking/table-booking.component';
import { TablePaymentComponent } from './table-payment/table-payment.component';



@NgModule({
  declarations: [
    TableUserComponent,
    TableBookingComponent,
    TablePaymentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
