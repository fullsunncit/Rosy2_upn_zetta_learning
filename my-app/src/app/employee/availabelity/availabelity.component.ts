import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { employee, employeeService } from '../employee.service';


export interface employees {id : string , name : string , position : string , available : string, detailLink : string}


@Component({
  selector: 'app-availabelity',
  templateUrl: './availabelity.component.html',
  styleUrls: ['./availabelity.component.css']
})
export class AvailabelityComponent implements OnInit {
  public employees : Observable<employee[]> 
  constructor( private employeeservice: employeeService) { 
    this.employees = this.employeeservice.employee$
    console.log(this.employees)
    
  }

  ngOnInit(): void {
  }

  displayedColumns: string[] = [ 'id','name', 'position', 'available'];

}