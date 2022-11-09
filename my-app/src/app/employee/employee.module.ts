import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { AvailabelityComponent } from './availabelity/availabelity.component';
import { DetailComponent } from './detail/detail.component';



@NgModule({
  declarations: [
    AvailabelityComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
