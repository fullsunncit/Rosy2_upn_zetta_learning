import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { AvailabelityComponent } from './availabelity/availabelity.component';

const routes: Routes = [
  {
    path: 'availabelity' ,
    pathMatch:'full',
    component:AvailabelityComponent
  },
  {
    path: 'detail/:id' ,
    pathMatch:'full',
    component:DetailComponent
  },
  {
    path: '**' ,
    pathMatch:'full',
    redirectTo : 'availabelity'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }