import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { employeeService } from '../employee.service';
interface Employee {id : string , name : string , position : string , available : string, detailLink : string}


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  private employeeid : string|null =null
  public employee : Employee|null = null

  constructor(private route:ActivatedRoute , private employeeservice: employeeService) {
    this.employeeid = this.route.snapshot.paramMap.get('id')
    console.log(this.employeeid);
   }
 

  ngOnInit(): void {
    if(typeof this.employeeid === 'string'){
      this.employee = this.employeeservice.getemployeeById(this.employeeid)
    } 
  }

}